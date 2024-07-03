#include <HTTPClient.h>
#include <WiFi.h>
#include <WiFiClientSecure.h>
#include "DHT.h"

#define DHTPIN 4     
#define DHTTYPE DHT11   
DHT dht(DHTPIN, DHTTYPE);

const char* ssid = "Galaxy M34 5G 9C76";
const char* password = "amanaman123";
// WiFiClient client;
WiFiClientSecure client;

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  dht.begin();
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {

    float humidity = dht.readHumidity();
    float temperature = dht.readTemperature();
    Serial.println(humidity);
    Serial.println(temperature);

    if (isnan(temperature) || isnan(humidity)) {
      Serial.println(F("Failed to read from DHT sensor!"));
      humidity =1;
      temperature = 5;
    }
    
    // http://192.168.173.73:5000/test
    // http.begin("http://192.168.173.73:5000/api/posts");
    client.setInsecure(); 
    HTTPClient http;
    // http.begin("https://test-123123.onrender.com/api/posts");
    http.begin("http://192.168.206.73:5000/api/posts");
    http.addHeader("Content-Type", "application/json");
    String requestBody = "{\"humidity\": " + String(humidity) + ", \"temperature\": " + String(temperature) + "}";
    int httpResponseCode = http.POST(requestBody);
    int headers = http.headers();
    Serial.println(headers);
    Serial.println(httpResponseCode);

    if (httpResponseCode > 0) {
      String response = http.getString();
      Serial.println(response);
    } else {
      Serial.println("Error on HTTP request");
    }
    http.end();
  }
  delay(5000);
}