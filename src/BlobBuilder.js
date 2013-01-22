

var BlobBuilder = function(){
    this.parts =[];
    this.blob = new Blob();
};

BlobBuilder.prototype.append = function(data,b){
    if (data instanceof ArrayBuffer){
        this.parts.push(new Uint8Array(data.slice(0)));
    } else if (typeof(data) === "string"){
        this.parts.push(new String(data));
    } else if (data instanceof Uint8Array){
        this.parts.push(data.slice(0));
    } else if (data instanceof Blob){
        this.parts.push(data.slice());
    } else {
        console.log(data);
    }
    b && console.log(b);
};

BlobBuilder.prototype.getBlob = function(contentType){
    return new Blob(this.parts,{"type":contentType})
};

