// package: odbc.v1
// file: protocolBuffers/odbc.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as protocolBuffers_odbc_pb from "../protocolBuffers/odbc_pb";

interface IMDBServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    initializeConnection: IMDBServiceService_IInitializeConnection;
    begin: IMDBServiceService_IBegin;
    close: IMDBServiceService_IClose;
    exec: IMDBServiceService_IExec;
    query: IMDBServiceService_IQuery;
    closeQuery: IMDBServiceService_ICloseQuery;
    storeFile: IMDBServiceService_IStoreFile;
}

interface IMDBServiceService_IInitializeConnection extends grpc.MethodDefinition<protocolBuffers_odbc_pb.InitializationRequest, protocolBuffers_odbc_pb.authPacket> {
    path: "/odbc.v1.MDBService/InitializeConnection";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protocolBuffers_odbc_pb.InitializationRequest>;
    requestDeserialize: grpc.deserialize<protocolBuffers_odbc_pb.InitializationRequest>;
    responseSerialize: grpc.serialize<protocolBuffers_odbc_pb.authPacket>;
    responseDeserialize: grpc.deserialize<protocolBuffers_odbc_pb.authPacket>;
}
interface IMDBServiceService_IBegin extends grpc.MethodDefinition<protocolBuffers_odbc_pb.XactRequest, protocolBuffers_odbc_pb.XactResponse> {
    path: "/odbc.v1.MDBService/Begin";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protocolBuffers_odbc_pb.XactRequest>;
    requestDeserialize: grpc.deserialize<protocolBuffers_odbc_pb.XactRequest>;
    responseSerialize: grpc.serialize<protocolBuffers_odbc_pb.XactResponse>;
    responseDeserialize: grpc.deserialize<protocolBuffers_odbc_pb.XactResponse>;
}
interface IMDBServiceService_IClose extends grpc.MethodDefinition<protocolBuffers_odbc_pb.authPacket, protocolBuffers_odbc_pb.CloseResponse> {
    path: "/odbc.v1.MDBService/Close";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protocolBuffers_odbc_pb.authPacket>;
    requestDeserialize: grpc.deserialize<protocolBuffers_odbc_pb.authPacket>;
    responseSerialize: grpc.serialize<protocolBuffers_odbc_pb.CloseResponse>;
    responseDeserialize: grpc.deserialize<protocolBuffers_odbc_pb.CloseResponse>;
}
interface IMDBServiceService_IExec extends grpc.MethodDefinition<protocolBuffers_odbc_pb.ExecRequest, protocolBuffers_odbc_pb.ExecResponse> {
    path: "/odbc.v1.MDBService/Exec";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protocolBuffers_odbc_pb.ExecRequest>;
    requestDeserialize: grpc.deserialize<protocolBuffers_odbc_pb.ExecRequest>;
    responseSerialize: grpc.serialize<protocolBuffers_odbc_pb.ExecResponse>;
    responseDeserialize: grpc.deserialize<protocolBuffers_odbc_pb.ExecResponse>;
}
interface IMDBServiceService_IQuery extends grpc.MethodDefinition<protocolBuffers_odbc_pb.QueryRequest, protocolBuffers_odbc_pb.QueryResponse> {
    path: "/odbc.v1.MDBService/Query";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<protocolBuffers_odbc_pb.QueryRequest>;
    requestDeserialize: grpc.deserialize<protocolBuffers_odbc_pb.QueryRequest>;
    responseSerialize: grpc.serialize<protocolBuffers_odbc_pb.QueryResponse>;
    responseDeserialize: grpc.deserialize<protocolBuffers_odbc_pb.QueryResponse>;
}
interface IMDBServiceService_ICloseQuery extends grpc.MethodDefinition<protocolBuffers_odbc_pb.authPacket, protocolBuffers_odbc_pb.CloseQueryResponse> {
    path: "/odbc.v1.MDBService/CloseQuery";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protocolBuffers_odbc_pb.authPacket>;
    requestDeserialize: grpc.deserialize<protocolBuffers_odbc_pb.authPacket>;
    responseSerialize: grpc.serialize<protocolBuffers_odbc_pb.CloseQueryResponse>;
    responseDeserialize: grpc.deserialize<protocolBuffers_odbc_pb.CloseQueryResponse>;
}
interface IMDBServiceService_IStoreFile extends grpc.MethodDefinition<protocolBuffers_odbc_pb.StoreFileRequest, protocolBuffers_odbc_pb.StoreFileResponse> {
    path: "/odbc.v1.MDBService/StoreFile";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<protocolBuffers_odbc_pb.StoreFileRequest>;
    requestDeserialize: grpc.deserialize<protocolBuffers_odbc_pb.StoreFileRequest>;
    responseSerialize: grpc.serialize<protocolBuffers_odbc_pb.StoreFileResponse>;
    responseDeserialize: grpc.deserialize<protocolBuffers_odbc_pb.StoreFileResponse>;
}

export const MDBServiceService: IMDBServiceService;

export interface IMDBServiceServer {
    initializeConnection: grpc.handleUnaryCall<protocolBuffers_odbc_pb.InitializationRequest, protocolBuffers_odbc_pb.authPacket>;
    begin: grpc.handleUnaryCall<protocolBuffers_odbc_pb.XactRequest, protocolBuffers_odbc_pb.XactResponse>;
    close: grpc.handleUnaryCall<protocolBuffers_odbc_pb.authPacket, protocolBuffers_odbc_pb.CloseResponse>;
    exec: grpc.handleUnaryCall<protocolBuffers_odbc_pb.ExecRequest, protocolBuffers_odbc_pb.ExecResponse>;
    query: grpc.handleServerStreamingCall<protocolBuffers_odbc_pb.QueryRequest, protocolBuffers_odbc_pb.QueryResponse>;
    closeQuery: grpc.handleUnaryCall<protocolBuffers_odbc_pb.authPacket, protocolBuffers_odbc_pb.CloseQueryResponse>;
    storeFile: grpc.handleClientStreamingCall<protocolBuffers_odbc_pb.StoreFileRequest, protocolBuffers_odbc_pb.StoreFileResponse>;
}

export interface IMDBServiceClient {
    initializeConnection(request: protocolBuffers_odbc_pb.InitializationRequest, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.authPacket) => void): grpc.ClientUnaryCall;
    initializeConnection(request: protocolBuffers_odbc_pb.InitializationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.authPacket) => void): grpc.ClientUnaryCall;
    initializeConnection(request: protocolBuffers_odbc_pb.InitializationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.authPacket) => void): grpc.ClientUnaryCall;
    begin(request: protocolBuffers_odbc_pb.XactRequest, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.XactResponse) => void): grpc.ClientUnaryCall;
    begin(request: protocolBuffers_odbc_pb.XactRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.XactResponse) => void): grpc.ClientUnaryCall;
    begin(request: protocolBuffers_odbc_pb.XactRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.XactResponse) => void): grpc.ClientUnaryCall;
    close(request: protocolBuffers_odbc_pb.authPacket, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.CloseResponse) => void): grpc.ClientUnaryCall;
    close(request: protocolBuffers_odbc_pb.authPacket, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.CloseResponse) => void): grpc.ClientUnaryCall;
    close(request: protocolBuffers_odbc_pb.authPacket, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.CloseResponse) => void): grpc.ClientUnaryCall;
    exec(request: protocolBuffers_odbc_pb.ExecRequest, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.ExecResponse) => void): grpc.ClientUnaryCall;
    exec(request: protocolBuffers_odbc_pb.ExecRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.ExecResponse) => void): grpc.ClientUnaryCall;
    exec(request: protocolBuffers_odbc_pb.ExecRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.ExecResponse) => void): grpc.ClientUnaryCall;
    query(request: protocolBuffers_odbc_pb.QueryRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<protocolBuffers_odbc_pb.QueryResponse>;
    query(request: protocolBuffers_odbc_pb.QueryRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<protocolBuffers_odbc_pb.QueryResponse>;
    closeQuery(request: protocolBuffers_odbc_pb.authPacket, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.CloseQueryResponse) => void): grpc.ClientUnaryCall;
    closeQuery(request: protocolBuffers_odbc_pb.authPacket, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.CloseQueryResponse) => void): grpc.ClientUnaryCall;
    closeQuery(request: protocolBuffers_odbc_pb.authPacket, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.CloseQueryResponse) => void): grpc.ClientUnaryCall;
    storeFile(callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.StoreFileResponse) => void): grpc.ClientWritableStream<protocolBuffers_odbc_pb.StoreFileRequest>;
    storeFile(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.StoreFileResponse) => void): grpc.ClientWritableStream<protocolBuffers_odbc_pb.StoreFileRequest>;
    storeFile(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.StoreFileResponse) => void): grpc.ClientWritableStream<protocolBuffers_odbc_pb.StoreFileRequest>;
    storeFile(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.StoreFileResponse) => void): grpc.ClientWritableStream<protocolBuffers_odbc_pb.StoreFileRequest>;
}

export class MDBServiceClient extends grpc.Client implements IMDBServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public initializeConnection(request: protocolBuffers_odbc_pb.InitializationRequest, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.authPacket) => void): grpc.ClientUnaryCall;
    public initializeConnection(request: protocolBuffers_odbc_pb.InitializationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.authPacket) => void): grpc.ClientUnaryCall;
    public initializeConnection(request: protocolBuffers_odbc_pb.InitializationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.authPacket) => void): grpc.ClientUnaryCall;
    public begin(request: protocolBuffers_odbc_pb.XactRequest, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.XactResponse) => void): grpc.ClientUnaryCall;
    public begin(request: protocolBuffers_odbc_pb.XactRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.XactResponse) => void): grpc.ClientUnaryCall;
    public begin(request: protocolBuffers_odbc_pb.XactRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.XactResponse) => void): grpc.ClientUnaryCall;
    public close(request: protocolBuffers_odbc_pb.authPacket, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.CloseResponse) => void): grpc.ClientUnaryCall;
    public close(request: protocolBuffers_odbc_pb.authPacket, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.CloseResponse) => void): grpc.ClientUnaryCall;
    public close(request: protocolBuffers_odbc_pb.authPacket, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.CloseResponse) => void): grpc.ClientUnaryCall;
    public exec(request: protocolBuffers_odbc_pb.ExecRequest, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.ExecResponse) => void): grpc.ClientUnaryCall;
    public exec(request: protocolBuffers_odbc_pb.ExecRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.ExecResponse) => void): grpc.ClientUnaryCall;
    public exec(request: protocolBuffers_odbc_pb.ExecRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.ExecResponse) => void): grpc.ClientUnaryCall;
    public query(request: protocolBuffers_odbc_pb.QueryRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<protocolBuffers_odbc_pb.QueryResponse>;
    public query(request: protocolBuffers_odbc_pb.QueryRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<protocolBuffers_odbc_pb.QueryResponse>;
    public closeQuery(request: protocolBuffers_odbc_pb.authPacket, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.CloseQueryResponse) => void): grpc.ClientUnaryCall;
    public closeQuery(request: protocolBuffers_odbc_pb.authPacket, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.CloseQueryResponse) => void): grpc.ClientUnaryCall;
    public closeQuery(request: protocolBuffers_odbc_pb.authPacket, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.CloseQueryResponse) => void): grpc.ClientUnaryCall;
    public storeFile(callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.StoreFileResponse) => void): grpc.ClientWritableStream<protocolBuffers_odbc_pb.StoreFileRequest>;
    public storeFile(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.StoreFileResponse) => void): grpc.ClientWritableStream<protocolBuffers_odbc_pb.StoreFileRequest>;
    public storeFile(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.StoreFileResponse) => void): grpc.ClientWritableStream<protocolBuffers_odbc_pb.StoreFileRequest>;
    public storeFile(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protocolBuffers_odbc_pb.StoreFileResponse) => void): grpc.ClientWritableStream<protocolBuffers_odbc_pb.StoreFileRequest>;
}
