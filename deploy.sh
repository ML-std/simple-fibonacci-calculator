docker build -t barisege/fibonacci-calculator-client:latest -t barisege/fibonacci-calculator-client:$GIT_SHA -f ./client/Dockerfile ./client 
docker build -t barisege/fibonacci-calculator-server:latest -t barisege/fibonacci-calculator-server:$GIT_SHA -f ./server/Dockerfile ./server 
docker build -t barisege/fibonacci-calculator-worker:latest -t barisege/fibonacci-calculator-worker:$GIT_SHA -f ./worker/Dockerfile ./worker 
docker push barisege/fibonacci-calculator-client:latest
docker push barisege/fibonacci-calculator-server:latest
docker push barisege/fibonacci-calculator-worker:latest
docker push barisege/fibonacci-calculator-client:$GIT_SHA
docker push barisege/fibonacci-calculator-server:$GIT_SHA
docker push barisege/fibonacci-calculator-worker:$GIT_SHA
kubectl apply -f k8s
kubectl set image deployments/server-deployment server=barisege/fibonacci-calculator-server:$GIT_SHA
kubectl set image deployments/client-deployment client=barisege/fibonacci-calculator-client:$GIT_SHA
kubectl set image deployments/worker-deployment worker=barisege/fibonacci-calculator-worker:$GIT_SHA

