let custom_btn = document.querySelector(".choose-file");
let default_btn = document.querySelector("#default-btn");
let img_src = document.getElementById("img-src");
let file_name='';

const default_btn_active = () => {
  default_btn.click();
};
default_btn.addEventListener("change", function () {
  const file = this.files[0];
  console.log(file.name);
  console.log(file.name.slice(-4));
  if (file) {
    file_name=file.name;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      img_src.src = result;
    };
    reader.readAsDataURL(file);
  }
});
// ---------------filter effect------------

let filter_control=document.querySelectorAll('input[type=range]');
function apply_filter()
{
  let comp_filter='';
  filter_control.forEach(function(item,index)
  {
    comp_filter+=item.getAttribute('data-filter')+'('+item.value
+item.getAttribute('data-scale')+')';
console.log(comp_filter);

  });
  img_src.style.filter=comp_filter;
}


