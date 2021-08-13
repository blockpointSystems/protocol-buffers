:: The statements below generate the gRPC and protocol buffers for the bSQL packets

:: This statement generates the packets for the golang API
protoc odbc.proto --go_out=:%GOPATH%\src --go-grpc_out=:%GOPATH%\src

:: This statement generates the packets for the typescript/javascript API
protoc -I=.  --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=typescript,mode=grpcwebtext:. odbc.proto