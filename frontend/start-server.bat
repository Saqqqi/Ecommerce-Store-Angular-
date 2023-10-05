set ENV_PATH=%CD%\..\..\..\environment\%USERNAME%-s4.env
title frontend angular
ng build --watch  --base-href /client-dashboard/ --build-optimizer false  --optimization false 
