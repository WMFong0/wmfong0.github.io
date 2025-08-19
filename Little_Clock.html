<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
        min-height: 100vh;
        line-height: 1;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        font-family: 'Segoe UI', Arial, sans-serif;
        color: white;
      }

      #text {
        font-size: 5vw;
        font-weight: bold;
        margin: 0;
        padding: 0;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        margin-bottom: 10px;
      }

      #Time {
        font-size: 25vw;
        font-weight: bold;
        text-shadow: 4px 4px 8px rgba(0,0,0,0.5);
        margin: 0;
        padding: 0;
        line-height: 0.8;
      }
      
      #Timezone {
        font-size: 3vw;
        margin: 15px 0;
        color: #ffeb3b;
        font-weight: 600;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
      }
    </style>
  </head>
  <body>
    <p id="text">Local Clock</p>
    <p id="Time"></p>
    <h5 id="Timezone"></h5>

    <script>
      function formatTime(num) {
        return num < 10 ? '0' + num : num;
      }

      setInterval(function() {
        const d = new Date();
        document.getElementById("Time").innerHTML = 
          formatTime(d.getHours()) + ":" + 
          formatTime(d.getMinutes()) + ":" + 
          formatTime(d.getSeconds());
      }, 1000);

      function getTimezoneOffset() {
          const timezoneOffset = new Date().getTimezoneOffset();
          const offsetHours = Math.abs(Math.floor(timezoneOffset / 60));
          const offsetMinutes = Math.abs(timezoneOffset % 60);
          const sign = timezoneOffset <= 0 ? '+' : '-';

          return `GMT${sign}${formatTime(offsetHours)}:${formatTime(offsetMinutes)}`;
      }

      function getTimezoneName() {
          try {
              return Intl.DateTimeFormat().resolvedOptions().timeZone;
          } catch (e) {
              return "Unknown Timezone";
          }
      }
      document.getElementById("Timezone").innerHTML = getTimezoneName() + " (" + getTimezoneOffset() + ")";
    </script>
  </body>
</html>
