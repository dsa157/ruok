function SuperFileWriter(filename, directoryRoot, option, data) {
    this.filename = filename;
    this.directoryRoot = directoryRoot;
    this.option = option;
    this.data = data;
    this.fileEntry = null;
    this.fileWriter = null;
    this.start = function() {
        directory.getFile(filename, option, this.onSuccess, this.onFail)
    };
};

SuperFileWriter.prototype.onSuccess = function(fileEntry) {
    this.fileEntry = fileEntry;
    this.fileEntry.createWriter(onCreateWriterSuccess, onCreateWriterFail)
}

SuperFileWriter.prototype.onFail = function(e) {
    finishedRequest(this.filename);
    if (onError!==undefined) 
        onError(filename, DEVELOPMENT_MODE ? "File not found: "+this.directoryRoot+"/"+this.filename : "");
}

SuperFileWriter.prototype.onCreateWriterSuccess = function(fileWriter) {
    this.fileWriter = fileWriter;
    this.fileWriter.onwriteend = this.prototype.onWriteEnd;
    this.fileWriter.onerror = this.prototype.onWriteError;

    var dataBlob=new Blob([new Uint8Array(this.data)]);
    if (append) fileWriter.seek(this.fileWriter.length);
    this.fileWriter.write(dataBlob,"application/octet-stream");
}

SuperFileWriter.prototype.onCreateWriterFail = function(e) {
     finishedRequest(this.filename);
     if (onError!==undefined) 
        onError(this.filename,"File writer creation error: "+this.directoryRoot+"/"+this.filename);
} 

SuperFileWriter.prototype.onWriteEnd = function(e) {
    finishedRequest(this.filename);
    if (onSuccess!==undefined) onSuccess(this.filename);
};


SuperFileWriter.prototype.onWriteError = function(e) {
    finishedRequest(this.filename);
    if (onError!==undefined) 
        onError(this.filename, "Write error: "+this.directoryRoot+"/"+this.filename);
}

