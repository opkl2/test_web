 // 데이터 배열
 let data = [];
 let currentPage = 1;
 const itemsPerPage = 50;
 const dataTbody = document.getElementById('data-tbody');
 
 // 데이터 표시 함수
 function displayData() {
     dataTbody.innerHTML = '';
     const startIndex = (currentPage - 1) * itemsPerPage;
     const endIndex = startIndex + itemsPerPage;
     const pageData = data.slice(startIndex, endIndex);
      
     pageData.forEach((row, index) => {
         let rowHtml = '';
         rowHtml = `
            <tr>
              <td>${row.id}</td>
              <td>${row.name}</td>
              <td style="text-align: center;"><img src="${row.image}" width="200" height="100"></td>
            </tr>
            `;
         dataTbody.innerHTML += rowHtml;
     });
     updatePageNumber();
 }
 
 function updatePageNumber() {
     document.getElementById('page-number').textContent = currentPage;
 }
 
 function prevPage() {
     if (currentPage > 1) {
         currentPage--;
         displayData();
     }
 }
 
 function nextPage() {
     if (currentPage < Math.ceil(data.length / itemsPerPage)) {
         currentPage++;
         displayData();
     }
 }
 
 function uploadFile() {
     const fileInput = document.getElementById('upload-file');
     const files = fileInput.files;
     data = [];
     const imageContainer = document.getElementById('image-container');
     imageContainer.innerHTML = ''; // Clear the image container
 
     for (let i = 0; i < files.length; i++) {
         const file = files[i];
                 if (file.type.startsWith('image/')) { // 이미지 파일만 확인
         const id = i + 1;
         const name = file.name;
         const image = URL.createObjectURL(file);
         data.push({ id, name, image });
     }
 }
             currentPage = 1;  // Reset the current page when uploading new files
             displayData();
         }
 
         // 자동 업로드
         const fileInput = document.getElementById('upload-file');
         fileInput.addEventListener('change', uploadFile);
 
         window.onload = function() {
             const files = []; // 이미지 파일 이름
 
             for (let i = 0; i < files.length; i++) {
                 const file = files[i];
                 if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.gif')) { 
                 const id = i + 1;
                 const name = file;
                     const image = 'path/to/image/' + file; 
                 data.push({ id, name, image });
             }
         }
             currentPage = 1;  
             displayData();
         }
     
     