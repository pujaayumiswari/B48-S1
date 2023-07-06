// let nama = ["andi", "budi", "rahma"]
// console.log(nama)

// let dataBlog =[]
// function addBlog(event){
//   event.preventDefault()

//   let title = document.getElementById(input-title).value
//   let startDate = document.getElementById(startDate).value
//   let endDate = document.getElementById(endDate).value
//   let description = document.getElementById(description).value
//   let image = document.getElementById(image).files

//   image = URL.createObjectURL(image)
//   let Blog = {
//     title,
//     startDate,
//     description,
//     image
//   }
// }
// blogs.push(Blog)
// console.log(blogs)

// let dataBlog = [];

// function addBlog(event) {
//   event.preventDefault();

//   let projectName = document.getElementById("inputTitle").value;
//   let startDate = new Date(document.getElementById("startDate").value);
//   let endDate = new Date(document.getElementById("endDate").value);
//   let nodeJs = document.getElementById("input-nodejs").checked;
//   let reactJs = document.getElementById("input-reactJs").checked;
//   let golang = document.getElementById("input-golang").checked;
//   let java = document.getElementById("java").checked;
//   let description = document.getElementById("description").value;
//   let image = document.getElementById("inputImage").files;

//   //untuk menampilkan gambar
//   image = URL.createObjectURL(image[0]);
//   console.log(image);

//   let project = {
//     projectName,
//     nodeJs,
//     reactJs,
//     golang,
//     java,   
//     description,
//     realTime : new Date(),
//     image,
//   };

//   dataBlog.push(project);
//   console.log(dataBlog);

//   renderBlog();
// }

// function renderBlog() {
//   //untuk menghilangkan post yang pertama
//   document.getElementById("contents").innerHTML="";

//   //menambahkan post
//   for (let index = 0; index < dataBlog.length; index++) {
//     document.getElementById("contents").innerHTML += `
//     <div class="row">
//       <div class="column">
//         <div class="img">
//           <img src="${dataBlog[index].image}"/>
//         </div>
//         <a href="projectdetail.html" style="color: black;">
//         <h3>${dataBlog[index].projectName}</h3>
//         </a>
//         <p>${dataBlog[index].startDate} ${dataBlog[index].endDate}</p>
//         <p>${dataBlog[index].description}</p>
//         <div class="technologies-icon">
//           <i class="fa-brands fa-node-js"></i>
//           <i class="fa-brands fa-react"></i>
//           <i class="fa-brands fa-golang"></i>
//           <i class="fa-brands fa-java"></i>
//         </div>        
//         <div class="button-container">
//           <button class="edit-button">Edit</button>
//           <button class="delete-button">Delete</button>
//         </div>       
//       </div>
//     `;
//   }
// }

// // function getFullTime(time) {
// //   let monthName = [
// //     "Jan",
// //     "Feb",
// //     "Mar",
// //     "Apr",
// //     "May",
// //     "Jun",
// //     "Jul",
// //     "Aug",
// //     "Sep",
// //     "Oct",
// //     "Nov",
// //     "Desc",
// //   ];

// //   let date = time.getDate();
// //   let monthIndex = time.getMonth();
// //   let year = time.getFullYear();
// //   let hours = time.getHours();
// //   let minutes = time.getMinutes();

// //   if (hours <= 9) {
// //     hours = "0" + hours;
// //   } else if (minutes <= 9) {
// //     minutes = "0" + minutes;
// //   }

// //   return `${date} ${monthName[monthIndex]} ${year} ${hours} : ${minutes} WIB`;
// // }

// // function getRealTime(time) {
// //   let timeNow = new Date();
// //   let timePost = time;

// //   // waktu sekarang - waktu post
// //   let realTime = timeNow - timePost; // hasilnya milidetik
// //   console.log(realTime);

// //   let milisecond = 1000; // milisecond
// //   let secondInHours = 3600; // 1 jam 3600 detik
// //   let hoursInDays = 24; // 1 hari 24 jam

//   let realTimeDay = Math.floor(
//     realTime / (milisecond * secondInHours * hoursInDays)
//   ); // 1/86400000
//   let realTimeHours = Math.floor(realTime / (milisecond * 60 * 60)); // 1/3600000
//   let realTimeMinutes = Math.floor(realTime / (milisecond * 60)); // 1/60000
//   let realTimeSecond = Math.floor(realTime / milisecond); // 1/1000

//   if (realTimeDay > 0) {
//     return `${realTimeDay} Day Ago`;
//   } else if (realTimeHours > 0) {
//     return `${realTimeHours} Hours Ago`;
//   } else if (realTimeMinutes > 0) {
//     return `${realTimeMinutes} Minutes Ago`;
//   } else {
//     return `${realTimeSecond} Seconds Ago`;
//   }
// }

// setInterval(function () {
//   renderBlog();
// }, 20000);

// console.log("hello world")
let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let projectName = document.getElementById("input-project").value;
  let startDate = new Date(document.getElementById("input-start").value);
  let endDate = new Date(document.getElementById("input-end").value);
  let description = document.getElementById("input-description").value;
  let javascript = document.getElementById("input-javascript").checked;
  let react = document.getElementById("input-reactJS").checked;
  let php = document.getElementById("input-php").checked;
  let java = document.getElementById("input-java").checked;
  let file = document.getElementById("input-file").files;

  // CHECKBOX FEATURE

  let technologies = [];

  if (javascript) {
    technologies.push('<i class="fa-brands fa-js" id="javascript"></i>');
  }
  if (react) {
    technologies.push('<i class="fa-brands fa-react" id="reactsJS"></i>');
  }
  if (php) {
    technologies.push('<i class="fa-brands fa-php" id="php"></i>');
  }
  if (java) {
    technologies.push('<i class="fa-brands fa-java" id="java"></i>');
  }

  let technologiesHTML = technologies.join();

  console.log(technologiesHTML);

  // INFORMATION IF THE VALUE IS EMPTY

  if (projectName == "") {
    return alert("Input the value first");
  } else if (startDate == "") {
    return alert("Input the value first");
  } else if (endDate == "") {
    return alert("Input the value first");
  } else if (description == "") {
    return alert("Input the value first");
  } else if (file == "") {
    return alert("Input the value first");
  }

  // TAKE THE VALUE OF IMAGES
  let image = URL.createObjectURL(file[0]);

  // PUSH dataBlog to vlog

  let blog = {
    image,
    projectName,
    duration : "3 bulan",
    description,
    technologiesHTML,
    author: "puja ayu ",
  };

  dataBlog.push(blog);

  renderBlog();

  console.log(dataBlog);
}

//SHOW THE RESULT OF THE FORM BLOG

function renderBlog() {
  document.getElementById("content").innerHTML = "";

  for (let i = 0; i < dataBlog.length; i++) {
    document.getElementById(
      "content"
    ).innerHTML += ` <div class="container-card">
    <a href="detail-blog.html"
      ><img src= ${dataBlog[i].image} alt=""
    /></a>
    <h3>Beautiful flowers - 2023</h3>
    <span>Duration : ${dataBlog[i].duration} | ${dataBlog[i].author}</span>
    <p>
      ${dataBlog[i].description}
    </p>
    <div class="programming-language">
      ${dataBlog[i].technologiesHTML}
    </div>
    <div class="btn-group">
      <button>Edit</button>
      <button>Delete</button>
    </div>
  </div>`;
  }
}