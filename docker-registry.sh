docker build -t server-cache ./server/cache-service
docker tag server-cache charnkij2035/sds-k8s-calculator:server-cache-12-servicename-aarch64
docker push charnkij2035/sds-k8s-calculator:server-cache-12-servicename-aarch64

docker build -t server-frontend ./client
docker tag server-frontend charnkij2035/sds-k8s-calculator:server-frontend-12-servicename-aarch64
docker push charnkij2035/sds-k8s-calculator:server-frontend-12-servicename-aarch64

docker build -t server-notification ./server/notification-service
docker tag server-notification charnkij2035/sds-k8s-calculator:server-notification-12-servicename-aarch64
docker push charnkij2035/sds-k8s-calculator:server-notification-12-servicename-aarch64

docker build -t server-calculate ./server/calculate-service
docker tag server-calculate charnkij2035/sds-k8s-calculator:server-calculate-12-servicename-aarch64
docker push charnkij2035/sds-k8s-calculator:server-calculate-12-servicename-aarch64