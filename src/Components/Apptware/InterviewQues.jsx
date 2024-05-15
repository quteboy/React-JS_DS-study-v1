import React from "react";

const InterviewQues = () => {
  /**
   * ? Write a JavaScript program, given the input array arr = [3, 4, 5, 6, 7] and target = 10, the function
   * ? should return [[3, 7], [4, 6]], as these are the pairs of integers from the array that add up to 10.
   */
  function findPairs(arr, target) {
    let pairs = [];
    let seen = new Map();

    for (let i = 0; i < arr.length; i++) {
      let currentNumber = arr[i];
      let complement = target - currentNumber;

      if (seen.has(complement)) {
        pairs.push([complement, currentNumber]);
      }

      seen.set(currentNumber, i);
    }

    return pairs;
  }

  let arr = [3, 4, 5, 6, 7];
  let target = 10;
  let result = findPairs(arr, target);

  console.log(result); // Output: [[3, 7], [4, 6]]
  function findPairs2(arr, target) {
    let pairs = [];
    // Sort the array
    arr.sort((a, b) => a - b);

    // Initialize two pointers
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[left] + arr[right];

      if (sum === target) {
        pairs.push([arr[left], arr[right]]);
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }

    return pairs;
  }

  let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let target2 = 10;
  let result2 = findPairs(arr2, target2);

  console.log(result2); // Output: [[3, 7], [4, 6]]

  let string = "Welcome to this Javascript Guide!";

  // Split the sentence into an array of words
  let wordsArray = string.split(" ");

  // Reverse each word in the array
  let reversedWordsArray = wordsArray.map((word) =>
    word.split("").reverse().join("")
  );

  // Join the reversed words back into a single string
  let reversedString = reversedWordsArray.join(" ");

  console.log(reversedString);
 /**
   * ? Create a React component that iterates through an array of images, displaying one image at a time. 
   * ? After a 2-second interval, the component should transition to the next image, continuing this cycle.
   * ? Upon reaching the end of the image array, it should seamlessly loop back to the first image, 
   * ? maintaining the continuous cycle.
   * 
   * ?
   */
 const imageUrls = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg',
];

 const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [images.length]);
  // return (
  //   <div>
  //     <h1>Image Carousel</h1>
  //     <ImageCarousel images={imageUrls} />
  //   </div>
  // );
  return (
    <div className="image-carousel">
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
    </div>
  );
};
  return <div>InterviewQues</div>;
};

export default InterviewQues;
