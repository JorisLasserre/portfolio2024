// Add this script to your script.js file
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('imageModal');
  const zoomedImg = document.getElementById('zoomedImg');
  const picture1 = document.querySelector('.picture1');
  const picture2 = document.querySelector('.picture2');
    const picture3 = document.querySelector('.picture3');

  picture1.addEventListener('click', function () {
    openModal(picture1.src);
  });

  picture2.addEventListener('click', function () {
    openModal(picture2.src);
  });

    picture3.addEventListener('click', function () {
        openModal(picture3.src);
    });

  function openModal(imageSrc) {
    zoomedImg.src = imageSrc;
    modal.style.display = 'block';
  }

  window.onclick = function (event) {
    if (event.target === modal) {
      closeModal();
    }
  };

  function closeModal() {
    modal.style.display = 'none';
  }
});
