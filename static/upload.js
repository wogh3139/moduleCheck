function readInputFile(e){
    var sel_files = [];

    sel_files = [];
    $('#imagePreview').empty();

    var files = e.target.files;
    var fileArr = Array.prototype.slice.call(files);
    var index = 0;

    fileArr.forEach(function(f){
    	if(!f.type.match("image/.*")){
        	alert("이미지 확장자만 업로드 가능합니다.");
            return;
        };
        if(files.length < 11){
        	sel_files.push(f);
            var reader = new FileReader();
            reader.onload = function(e){
            	var html = `<a id=img_id_${index}><img src=${e.target.result} data-file=${f.name} /></a>`;
                $('imagePreview').append(html);
                index++;
            };
            reader.readAsDataURL(f);
        }
    })
    if(files.length > 11){
    	alert("최대 10장까지 업로드 할 수 있습니다.");
    }
}

$('#real-input').on('change',readInputFile);