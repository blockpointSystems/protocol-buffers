// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protocolBuffers_odbc_pb = require('../protocolBuffers/odbc_pb.js');

function serialize_odbc_v1_CloseQueryResponse(arg) {
  if (!(arg instanceof protocolBuffers_odbc_pb.CloseQueryResponse)) {
    throw new Error('Expected argument of type odbc.v1.CloseQueryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_odbc_v1_CloseQueryResponse(buffer_arg) {
  return protocolBuffers_odbc_pb.CloseQueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_odbc_v1_CloseResponse(arg) {
  if (!(arg instanceof protocolBuffers_odbc_pb.CloseResponse)) {
    throw new Error('Expected argument of type odbc.v1.CloseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_odbc_v1_CloseResponse(buffer_arg) {
  return protocolBuffers_odbc_pb.CloseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_odbc_v1_ExecRequest(arg) {
  if (!(arg instanceof protocolBuffers_odbc_pb.ExecRequest)) {
    throw new Error('Expected argument of type odbc.v1.ExecRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_odbc_v1_ExecRequest(buffer_arg) {
  return protocolBuffers_odbc_pb.ExecRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_odbc_v1_ExecResponse(arg) {
  if (!(arg instanceof protocolBuffers_odbc_pb.ExecResponse)) {
    throw new Error('Expected argument of type odbc.v1.ExecResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_odbc_v1_ExecResponse(buffer_arg) {
  return protocolBuffers_odbc_pb.ExecResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_odbc_v1_InitializationRequest(arg) {
  if (!(arg instanceof protocolBuffers_odbc_pb.InitializationRequest)) {
    throw new Error('Expected argument of type odbc.v1.InitializationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_odbc_v1_InitializationRequest(buffer_arg) {
  return protocolBuffers_odbc_pb.InitializationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_odbc_v1_QueryRequest(arg) {
  if (!(arg instanceof protocolBuffers_odbc_pb.QueryRequest)) {
    throw new Error('Expected argument of type odbc.v1.QueryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_odbc_v1_QueryRequest(buffer_arg) {
  return protocolBuffers_odbc_pb.QueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_odbc_v1_QueryResponse(arg) {
  if (!(arg instanceof protocolBuffers_odbc_pb.QueryResponse)) {
    throw new Error('Expected argument of type odbc.v1.QueryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_odbc_v1_QueryResponse(buffer_arg) {
  return protocolBuffers_odbc_pb.QueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_odbc_v1_StoreFileRequest(arg) {
  if (!(arg instanceof protocolBuffers_odbc_pb.StoreFileRequest)) {
    throw new Error('Expected argument of type odbc.v1.StoreFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_odbc_v1_StoreFileRequest(buffer_arg) {
  return protocolBuffers_odbc_pb.StoreFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_odbc_v1_StoreFileResponse(arg) {
  if (!(arg instanceof protocolBuffers_odbc_pb.StoreFileResponse)) {
    throw new Error('Expected argument of type odbc.v1.StoreFileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_odbc_v1_StoreFileResponse(buffer_arg) {
  return protocolBuffers_odbc_pb.StoreFileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_odbc_v1_XactRequest(arg) {
  if (!(arg instanceof protocolBuffers_odbc_pb.XactRequest)) {
    throw new Error('Expected argument of type odbc.v1.XactRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_odbc_v1_XactRequest(buffer_arg) {
  return protocolBuffers_odbc_pb.XactRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_odbc_v1_XactResponse(arg) {
  if (!(arg instanceof protocolBuffers_odbc_pb.XactResponse)) {
    throw new Error('Expected argument of type odbc.v1.XactResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_odbc_v1_XactResponse(buffer_arg) {
  return protocolBuffers_odbc_pb.XactResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_odbc_v1_authPacket(arg) {
  if (!(arg instanceof protocolBuffers_odbc_pb.authPacket)) {
    throw new Error('Expected argument of type odbc.v1.authPacket');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_odbc_v1_authPacket(buffer_arg) {
  return protocolBuffers_odbc_pb.authPacket.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query Services
// Query Services define all the different gRPC queries that can be performed within the bSQL Protocol Buffer
var MDBServiceService = exports.MDBServiceService = {
  // //////////////////////////////////////////////////////////////////////////////
// //                            Unary requests                              ////
// //////////////////////////////////////////////////////////////////////////////
//
// Register new connection
initializeConnection: {
    path: '/odbc.v1.MDBService/InitializeConnection',
    requestStream: false,
    responseStream: false,
    requestType: protocolBuffers_odbc_pb.InitializationRequest,
    responseType: protocolBuffers_odbc_pb.authPacket,
    requestSerialize: serialize_odbc_v1_InitializationRequest,
    requestDeserialize: deserialize_odbc_v1_InitializationRequest,
    responseSerialize: serialize_odbc_v1_authPacket,
    responseDeserialize: deserialize_odbc_v1_authPacket,
  },
  //    Transactions    //
//
// Begin: Start Transaction
begin: {
    path: '/odbc.v1.MDBService/Begin',
    requestStream: false,
    responseStream: false,
    requestType: protocolBuffers_odbc_pb.XactRequest,
    responseType: protocolBuffers_odbc_pb.XactResponse,
    requestSerialize: serialize_odbc_v1_XactRequest,
    requestDeserialize: deserialize_odbc_v1_XactRequest,
    responseSerialize: serialize_odbc_v1_XactResponse,
    responseDeserialize: deserialize_odbc_v1_XactResponse,
  },
  // Close: Close session and all active transactions
close: {
    path: '/odbc.v1.MDBService/Close',
    requestStream: false,
    responseStream: false,
    requestType: protocolBuffers_odbc_pb.authPacket,
    responseType: protocolBuffers_odbc_pb.CloseResponse,
    requestSerialize: serialize_odbc_v1_authPacket,
    requestDeserialize: deserialize_odbc_v1_authPacket,
    responseSerialize: serialize_odbc_v1_CloseResponse,
    responseDeserialize: deserialize_odbc_v1_CloseResponse,
  },
  //    Commands    //
//
// Exec:  Execute a statement / command
exec: {
    path: '/odbc.v1.MDBService/Exec',
    requestStream: false,
    responseStream: false,
    requestType: protocolBuffers_odbc_pb.ExecRequest,
    responseType: protocolBuffers_odbc_pb.ExecResponse,
    requestSerialize: serialize_odbc_v1_ExecRequest,
    requestDeserialize: deserialize_odbc_v1_ExecRequest,
    responseSerialize: serialize_odbc_v1_ExecResponse,
    responseDeserialize: deserialize_odbc_v1_ExecResponse,
  },
  // Query: Query the database for information
query: {
    path: '/odbc.v1.MDBService/Query',
    requestStream: false,
    responseStream: true,
    requestType: protocolBuffers_odbc_pb.QueryRequest,
    responseType: protocolBuffers_odbc_pb.QueryResponse,
    requestSerialize: serialize_odbc_v1_QueryRequest,
    requestDeserialize: deserialize_odbc_v1_QueryRequest,
    responseSerialize: serialize_odbc_v1_QueryResponse,
    responseDeserialize: deserialize_odbc_v1_QueryResponse,
  },
  closeQuery: {
    path: '/odbc.v1.MDBService/CloseQuery',
    requestStream: false,
    responseStream: false,
    requestType: protocolBuffers_odbc_pb.authPacket,
    responseType: protocolBuffers_odbc_pb.CloseQueryResponse,
    requestSerialize: serialize_odbc_v1_authPacket,
    requestDeserialize: deserialize_odbc_v1_authPacket,
    responseSerialize: serialize_odbc_v1_CloseQueryResponse,
    responseDeserialize: deserialize_odbc_v1_CloseQueryResponse,
  },
  // Query sends a single bSQL statement and returns its corresponding response
// rpc Query(QueryRequest) returns (QueryResponse) {};
//
storeFile: {
    path: '/odbc.v1.MDBService/StoreFile',
    requestStream: true,
    responseStream: false,
    requestType: protocolBuffers_odbc_pb.StoreFileRequest,
    responseType: protocolBuffers_odbc_pb.StoreFileResponse,
    requestSerialize: serialize_odbc_v1_StoreFileRequest,
    requestDeserialize: deserialize_odbc_v1_StoreFileRequest,
    responseSerialize: serialize_odbc_v1_StoreFileResponse,
    responseDeserialize: deserialize_odbc_v1_StoreFileResponse,
  },
};

exports.MDBServiceClient = grpc.makeGenericClientConstructor(MDBServiceService);
