// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.19.4
// source: odbc.proto

package odbc

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// MDBServiceClient is the client API for MDBService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MDBServiceClient interface {
	// Register new connection
	InitializeConnection(ctx context.Context, in *InitializationRequest, opts ...grpc.CallOption) (*AuthPacket, error)
	// Begin: Start Transaction
	Begin(ctx context.Context, in *XactRequest, opts ...grpc.CallOption) (*XactResponse, error)
	// Close: Close session and all active transactions
	Close(ctx context.Context, in *AuthPacket, opts ...grpc.CallOption) (*CloseResponse, error)
	// Exec:  Execute a statement / command
	Exec(ctx context.Context, in *ExecRequest, opts ...grpc.CallOption) (*ExecResponse, error)
	// Query: Query the database for information
	Query(ctx context.Context, in *QueryRequest, opts ...grpc.CallOption) (MDBService_QueryClient, error)
	CloseQuery(ctx context.Context, in *AuthPacket, opts ...grpc.CallOption) (*CloseQueryResponse, error)
	StoreFile(ctx context.Context, opts ...grpc.CallOption) (MDBService_StoreFileClient, error)
}

type mDBServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewMDBServiceClient(cc grpc.ClientConnInterface) MDBServiceClient {
	return &mDBServiceClient{cc}
}

func (c *mDBServiceClient) InitializeConnection(ctx context.Context, in *InitializationRequest, opts ...grpc.CallOption) (*AuthPacket, error) {
	out := new(AuthPacket)
	err := c.cc.Invoke(ctx, "/odbc.v1.MDBService/InitializeConnection", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *mDBServiceClient) Begin(ctx context.Context, in *XactRequest, opts ...grpc.CallOption) (*XactResponse, error) {
	out := new(XactResponse)
	err := c.cc.Invoke(ctx, "/odbc.v1.MDBService/Begin", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *mDBServiceClient) Close(ctx context.Context, in *AuthPacket, opts ...grpc.CallOption) (*CloseResponse, error) {
	out := new(CloseResponse)
	err := c.cc.Invoke(ctx, "/odbc.v1.MDBService/Close", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *mDBServiceClient) Exec(ctx context.Context, in *ExecRequest, opts ...grpc.CallOption) (*ExecResponse, error) {
	out := new(ExecResponse)
	err := c.cc.Invoke(ctx, "/odbc.v1.MDBService/Exec", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *mDBServiceClient) Query(ctx context.Context, in *QueryRequest, opts ...grpc.CallOption) (MDBService_QueryClient, error) {
	stream, err := c.cc.NewStream(ctx, &MDBService_ServiceDesc.Streams[0], "/odbc.v1.MDBService/Query", opts...)
	if err != nil {
		return nil, err
	}
	x := &mDBServiceQueryClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type MDBService_QueryClient interface {
	Recv() (*QueryResponse, error)
	grpc.ClientStream
}

type mDBServiceQueryClient struct {
	grpc.ClientStream
}

func (x *mDBServiceQueryClient) Recv() (*QueryResponse, error) {
	m := new(QueryResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *mDBServiceClient) CloseQuery(ctx context.Context, in *AuthPacket, opts ...grpc.CallOption) (*CloseQueryResponse, error) {
	out := new(CloseQueryResponse)
	err := c.cc.Invoke(ctx, "/odbc.v1.MDBService/CloseQuery", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *mDBServiceClient) StoreFile(ctx context.Context, opts ...grpc.CallOption) (MDBService_StoreFileClient, error) {
	stream, err := c.cc.NewStream(ctx, &MDBService_ServiceDesc.Streams[1], "/odbc.v1.MDBService/StoreFile", opts...)
	if err != nil {
		return nil, err
	}
	x := &mDBServiceStoreFileClient{stream}
	return x, nil
}

type MDBService_StoreFileClient interface {
	Send(*StoreFileRequest) error
	CloseAndRecv() (*StoreFileResponse, error)
	grpc.ClientStream
}

type mDBServiceStoreFileClient struct {
	grpc.ClientStream
}

func (x *mDBServiceStoreFileClient) Send(m *StoreFileRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *mDBServiceStoreFileClient) CloseAndRecv() (*StoreFileResponse, error) {
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	m := new(StoreFileResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// MDBServiceServer is the server API for MDBService service.
// All implementations must embed UnimplementedMDBServiceServer
// for forward compatibility
type MDBServiceServer interface {
	// Register new connection
	InitializeConnection(context.Context, *InitializationRequest) (*AuthPacket, error)
	// Begin: Start Transaction
	Begin(context.Context, *XactRequest) (*XactResponse, error)
	// Close: Close session and all active transactions
	Close(context.Context, *AuthPacket) (*CloseResponse, error)
	// Exec:  Execute a statement / command
	Exec(context.Context, *ExecRequest) (*ExecResponse, error)
	// Query: Query the database for information
	Query(*QueryRequest, MDBService_QueryServer) error
	CloseQuery(context.Context, *AuthPacket) (*CloseQueryResponse, error)
	StoreFile(MDBService_StoreFileServer) error
	//mustEmbedUnimplementedMDBServiceServer()
}

// UnimplementedMDBServiceServer must be embedded to have forward compatible implementations.
type UnimplementedMDBServiceServer struct {
}

func (UnimplementedMDBServiceServer) InitializeConnection(context.Context, *InitializationRequest) (*AuthPacket, error) {
	return nil, status.Errorf(codes.Unimplemented, "method InitializeConnection not implemented")
}
func (UnimplementedMDBServiceServer) Begin(context.Context, *XactRequest) (*XactResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Begin not implemented")
}
func (UnimplementedMDBServiceServer) Close(context.Context, *AuthPacket) (*CloseResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Close not implemented")
}
func (UnimplementedMDBServiceServer) Exec(context.Context, *ExecRequest) (*ExecResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Exec not implemented")
}
func (UnimplementedMDBServiceServer) Query(*QueryRequest, MDBService_QueryServer) error {
	return status.Errorf(codes.Unimplemented, "method Query not implemented")
}
func (UnimplementedMDBServiceServer) CloseQuery(context.Context, *AuthPacket) (*CloseQueryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CloseQuery not implemented")
}
func (UnimplementedMDBServiceServer) StoreFile(MDBService_StoreFileServer) error {
	return status.Errorf(codes.Unimplemented, "method StoreFile not implemented")
}
func (UnimplementedMDBServiceServer) mustEmbedUnimplementedMDBServiceServer() {}

// UnsafeMDBServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MDBServiceServer will
// result in compilation errors.
type UnsafeMDBServiceServer interface {
	mustEmbedUnimplementedMDBServiceServer()
}

func RegisterMDBServiceServer(s grpc.ServiceRegistrar, srv MDBServiceServer) {
	s.RegisterService(&MDBService_ServiceDesc, srv)
}

func _MDBService_InitializeConnection_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(InitializationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MDBServiceServer).InitializeConnection(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/odbc.v1.MDBService/InitializeConnection",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MDBServiceServer).InitializeConnection(ctx, req.(*InitializationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MDBService_Begin_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(XactRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MDBServiceServer).Begin(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/odbc.v1.MDBService/Begin",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MDBServiceServer).Begin(ctx, req.(*XactRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MDBService_Close_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AuthPacket)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MDBServiceServer).Close(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/odbc.v1.MDBService/Close",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MDBServiceServer).Close(ctx, req.(*AuthPacket))
	}
	return interceptor(ctx, in, info, handler)
}

func _MDBService_Exec_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ExecRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MDBServiceServer).Exec(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/odbc.v1.MDBService/Exec",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MDBServiceServer).Exec(ctx, req.(*ExecRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MDBService_Query_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(QueryRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(MDBServiceServer).Query(m, &mDBServiceQueryServer{stream})
}

type MDBService_QueryServer interface {
	Send(*QueryResponse) error
	grpc.ServerStream
}

type mDBServiceQueryServer struct {
	grpc.ServerStream
}

func (x *mDBServiceQueryServer) Send(m *QueryResponse) error {
	return x.ServerStream.SendMsg(m)
}

func _MDBService_CloseQuery_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AuthPacket)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MDBServiceServer).CloseQuery(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/odbc.v1.MDBService/CloseQuery",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MDBServiceServer).CloseQuery(ctx, req.(*AuthPacket))
	}
	return interceptor(ctx, in, info, handler)
}

func _MDBService_StoreFile_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(MDBServiceServer).StoreFile(&mDBServiceStoreFileServer{stream})
}

type MDBService_StoreFileServer interface {
	SendAndClose(*StoreFileResponse) error
	Recv() (*StoreFileRequest, error)
	grpc.ServerStream
}

type mDBServiceStoreFileServer struct {
	grpc.ServerStream
}

func (x *mDBServiceStoreFileServer) SendAndClose(m *StoreFileResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *mDBServiceStoreFileServer) Recv() (*StoreFileRequest, error) {
	m := new(StoreFileRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// MDBService_ServiceDesc is the grpc.ServiceDesc for MDBService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var MDBService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "odbc.v1.MDBService",
	HandlerType: (*MDBServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "InitializeConnection",
			Handler:    _MDBService_InitializeConnection_Handler,
		},
		{
			MethodName: "Begin",
			Handler:    _MDBService_Begin_Handler,
		},
		{
			MethodName: "Close",
			Handler:    _MDBService_Close_Handler,
		},
		{
			MethodName: "Exec",
			Handler:    _MDBService_Exec_Handler,
		},
		{
			MethodName: "CloseQuery",
			Handler:    _MDBService_CloseQuery_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "Query",
			Handler:       _MDBService_Query_Handler,
			ServerStreams: true,
		},
		{
			StreamName:    "StoreFile",
			Handler:       _MDBService_StoreFile_Handler,
			ClientStreams: true,
		},
	},
	Metadata: "odbc.proto",
}
