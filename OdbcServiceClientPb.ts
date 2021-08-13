/**
 * @fileoverview gRPC-Web generated client stub for odbc.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as odbc_pb from './odbc_pb';


export class MDBServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoInitializeConnection = new grpcWeb.AbstractClientBase.MethodInfo(
    odbc_pb.authPacket,
    (request: odbc_pb.InitializationRequest) => {
      return request.serializeBinary();
    },
    odbc_pb.authPacket.deserializeBinary
  );

  initializeConnection(
    request: odbc_pb.InitializationRequest,
    metadata: grpcWeb.Metadata | null): Promise<odbc_pb.authPacket>;

  initializeConnection(
    request: odbc_pb.InitializationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: odbc_pb.authPacket) => void): grpcWeb.ClientReadableStream<odbc_pb.authPacket>;

  initializeConnection(
    request: odbc_pb.InitializationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: odbc_pb.authPacket) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/odbc.v1.MDBService/InitializeConnection',
        request,
        metadata || {},
        this.methodInfoInitializeConnection,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/odbc.v1.MDBService/InitializeConnection',
    request,
    metadata || {},
    this.methodInfoInitializeConnection);
  }

  methodInfoBegin = new grpcWeb.AbstractClientBase.MethodInfo(
    odbc_pb.XactResponse,
    (request: odbc_pb.XactRequest) => {
      return request.serializeBinary();
    },
    odbc_pb.XactResponse.deserializeBinary
  );

  begin(
    request: odbc_pb.XactRequest,
    metadata: grpcWeb.Metadata | null): Promise<odbc_pb.XactResponse>;

  begin(
    request: odbc_pb.XactRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: odbc_pb.XactResponse) => void): grpcWeb.ClientReadableStream<odbc_pb.XactResponse>;

  begin(
    request: odbc_pb.XactRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: odbc_pb.XactResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/odbc.v1.MDBService/Begin',
        request,
        metadata || {},
        this.methodInfoBegin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/odbc.v1.MDBService/Begin',
    request,
    metadata || {},
    this.methodInfoBegin);
  }

  methodInfoClose = new grpcWeb.AbstractClientBase.MethodInfo(
    odbc_pb.CloseResponse,
    (request: odbc_pb.authPacket) => {
      return request.serializeBinary();
    },
    odbc_pb.CloseResponse.deserializeBinary
  );

  close(
    request: odbc_pb.authPacket,
    metadata: grpcWeb.Metadata | null): Promise<odbc_pb.CloseResponse>;

  close(
    request: odbc_pb.authPacket,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: odbc_pb.CloseResponse) => void): grpcWeb.ClientReadableStream<odbc_pb.CloseResponse>;

  close(
    request: odbc_pb.authPacket,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: odbc_pb.CloseResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/odbc.v1.MDBService/Close',
        request,
        metadata || {},
        this.methodInfoClose,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/odbc.v1.MDBService/Close',
    request,
    metadata || {},
    this.methodInfoClose);
  }

  methodInfoExec = new grpcWeb.AbstractClientBase.MethodInfo(
    odbc_pb.ExecResponse,
    (request: odbc_pb.ExecRequest) => {
      return request.serializeBinary();
    },
    odbc_pb.ExecResponse.deserializeBinary
  );

  exec(
    request: odbc_pb.ExecRequest,
    metadata: grpcWeb.Metadata | null): Promise<odbc_pb.ExecResponse>;

  exec(
    request: odbc_pb.ExecRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: odbc_pb.ExecResponse) => void): grpcWeb.ClientReadableStream<odbc_pb.ExecResponse>;

  exec(
    request: odbc_pb.ExecRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: odbc_pb.ExecResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/odbc.v1.MDBService/Exec',
        request,
        metadata || {},
        this.methodInfoExec,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/odbc.v1.MDBService/Exec',
    request,
    metadata || {},
    this.methodInfoExec);
  }

  methodInfoQuery = new grpcWeb.AbstractClientBase.MethodInfo(
    odbc_pb.QueryResponse,
    (request: odbc_pb.QueryRequest) => {
      return request.serializeBinary();
    },
    odbc_pb.QueryResponse.deserializeBinary
  );

  query(
    request: odbc_pb.QueryRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/odbc.v1.MDBService/Query',
      request,
      metadata || {},
      this.methodInfoQuery);
  }

  methodInfoCloseQuery = new grpcWeb.AbstractClientBase.MethodInfo(
    odbc_pb.CloseQueryResponse,
    (request: odbc_pb.authPacket) => {
      return request.serializeBinary();
    },
    odbc_pb.CloseQueryResponse.deserializeBinary
  );

  closeQuery(
    request: odbc_pb.authPacket,
    metadata: grpcWeb.Metadata | null): Promise<odbc_pb.CloseQueryResponse>;

  closeQuery(
    request: odbc_pb.authPacket,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: odbc_pb.CloseQueryResponse) => void): grpcWeb.ClientReadableStream<odbc_pb.CloseQueryResponse>;

  closeQuery(
    request: odbc_pb.authPacket,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: odbc_pb.CloseQueryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/odbc.v1.MDBService/CloseQuery',
        request,
        metadata || {},
        this.methodInfoCloseQuery,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/odbc.v1.MDBService/CloseQuery',
    request,
    metadata || {},
    this.methodInfoCloseQuery);
  }

}

