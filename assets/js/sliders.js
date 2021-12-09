$(document).ready(function () {
  const previousArrow = `
    <button class="slick-arrow slick-prev" aria-label="previous">
      <svg xmlns="http://www.w3.org/2000/svg" width="10.589" height="31.716" viewBox="0 0 10.589 31.716">
      <path id="arrow-ios-forward-fill" d="M22.584,39.168a1.243,1.243,0,0,0,.96-.52,2.75,2.75,0,0,0,.536-1.533,3.092,3.092,0,0,0-.341-1.655l-6.72-12.116L23.5,11.207a3.112,3.112,0,0,0,.327-1.664,2.719,2.719,0,0,0-.552-1.523,1.212,1.212,0,0,0-1.144-.552,1.5,1.5,0,0,0-1.046.891L13.839,21.921a3.189,3.189,0,0,0,0,2.871l7.5,13.562a1.342,1.342,0,0,0,1.245.814Z" transform="translate(-13.497 -7.456)" fill="#fff"/>
      </svg>
    </button>
  `;

  const nextArrow = `
    <button class="slick-arrow slick-next" aria-label="next">
      <svg xmlns="http://www.w3.org/2000/svg" width="10.589" height="31.716" viewBox="0 0 10.589 31.716">
      <path id="arrow-ios-forward-fill" d="M15,39.168a1.243,1.243,0,0,1-.96-.52,2.75,2.75,0,0,1-.536-1.533,3.092,3.092,0,0,1,.341-1.655l6.72-12.116-6.48-12.138a3.112,3.112,0,0,1-.327-1.664A2.719,2.719,0,0,1,14.31,8.02a1.212,1.212,0,0,1,1.144-.552,1.5,1.5,0,0,1,1.046.891l7.245,13.562a3.189,3.189,0,0,1,0,2.871l-7.5,13.562A1.342,1.342,0,0,1,15,39.168Z" transform="translate(-13.497 -7.456)" fill="#fff"/>
      </svg>
    </button>
  `;
  const previousArrowCircle = `
    <button class="slick-arrow slick-prev" aria-label="previous">
    <svg xmlns="http://www.w3.org/2000/svg" width="32.729" height="32.729" viewBox="0 0 32.729 32.729">
    <path id="Path_5" data-name="Path 5" d="M32.729,16.365A16.365,16.365,0,1,1,16.365,0,16.365,16.365,0,0,1,32.729,16.365Zm-15.64,5.413a1.024,1.024,0,0,1-1.448,1.448L9.5,17.089a1.023,1.023,0,0,1,0-1.448L15.641,9.5a1.024,1.024,0,1,1,1.448,1.448L12.7,15.342h9.8a1.023,1.023,0,0,1,0,2.046H12.7l4.392,4.39Z" fill-rule="evenodd"/>
  </svg>
  
    </button>
  `;

  const nextArrowCircle = `
    <button class="slick-arrow slick-next" aria-label="next">
    <svg id="arrow-left-circle-fill" xmlns="http://www.w3.org/2000/svg" width="32.729" height="32.729" viewBox="0 0 32.729 32.729">
    <path id="Path_5" data-name="Path 5" d="M0,16.365A16.365,16.365,0,1,0,16.365,0,16.365,16.365,0,0,0,0,16.365Zm15.64,5.413a1.024,1.024,0,0,0,1.448,1.448l6.137-6.137a1.023,1.023,0,0,0,0-1.448L17.088,9.5a1.024,1.024,0,1,0-1.448,1.448l4.392,4.389h-9.8a1.023,1.023,0,0,0,0,2.046h9.8l-4.392,4.39Z" fill-rule="evenodd"/>
  </svg>
  
    </button>
  `;

  $('.tour-slider').slick({
    arrows: true,
    prevArrow: previousArrow,
    nextArrow: nextArrow,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $('.dmc-slider').slick({
    arrows: true,
    prevArrow: previousArrowCircle,
    nextArrow: nextArrowCircle,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
  });
});
