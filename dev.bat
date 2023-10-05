title dev all script runner


cd E:\Ecommerce-Store-Angular-\backend
start start-server.bat



SET NODE_ENV=saqlain
title web front end
cd E:\Ecommerce-Store-Angular-\frontend
start ng serve



timeout 30 

"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" http://localhost:4200