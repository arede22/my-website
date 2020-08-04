// // toggling theme of site
// $(document).ready(function () {
//
//   var els = document.body.querySelectorAll('*'); // document.body.getElementsByTagName("*");
//   var toggleTheme = document.getElementById("changeToLight");
//   console.log('toggling check');
//
//   if (toggleTheme.checked) {
//     console.log('checked');
//     els.forEach(function(node) {
//       if (node.hasAttribute("theme")) {
//         node.setAttribute("theme", true);
//       } else {
//         var att = document.createAttribute("theme");
//         att.value = true;
//         node.setAttributeNode(att);
//       }
//     })
//   } else  {
//     els.forEach(function(node) {
//       if (node.hasAttribute("theme")) {
//         node.removeAttribute("theme");
//       }
//     })
//   }
//
// });
