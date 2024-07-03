# ESP32 Temperature and Humidity Sensor with Node.js Server

This project uses an ESP32 microcontroller with a DHT11 sensor to measure temperature and humidity. The data is then sent to a Node.js server for storage.

## Hardware Requirements

- ESP32 development board
- DHT11 temperature and humidity sensor
- Wi-Fi network

## Software Requirements

- Arduino IDE with ESP32 board support
- Required libraries:
  - HTTPClient
  - WiFi
  - WiFiClientSecure
  - DHT sensor library

## Setup

1. Connect the DHT11 sensor to the ESP32:
   - VCC to 3.3V
   - GND to GND
   - Data to GPIO 4

2. Install the required libraries in the Arduino IDE.

3. Update the Wi-Fi credentials in the code:
   ```cpp
   const char* ssid = "Your_WiFi_SSID";
   const char* password = "Your_WiFi_Password";
   ```
   
4. Set up your Node.js server and update the server URL in the code:
    ```cpp
   http.begin("http://your_server_ip:5000/api/posts");
   ```

