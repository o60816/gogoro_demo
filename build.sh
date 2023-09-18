ECHO Start to clone the configuration
git clone https://github.com/o60816/gogoro_demo_ci.git

ECHO Start the mariadb and service 
docker-compose -f ./gogoro_demo_ci/docker-compose.yaml up -d
