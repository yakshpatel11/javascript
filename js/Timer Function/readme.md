
# 🖼️ Full Stack Developer Image Carousel

A simple and fun **Image Carousel** built using vanilla JavaScript! 🚀
This app lets you manually or automatically cycle through a set of full-stack developer images.
Perfect for showcasing skills, slideshows, or just having a cool image viewer on your site!

---

## 📸 Features

✅ View a collection of full-stack developer themed images
➡️ Go to the **next image** manually
⬅️ Go to the **previous image** manually
🔁 Start automatic slideshow
⏹️ Stop automatic slideshow

---

## 🛠️ How It Works

* An array of image URLs is stored in `images[]`.
* HTML `img` element is dynamically updated using JavaScript.
* Buttons allow manual control:

  * **Next**: Advances to the next image.
  * **Previous**: Goes back to the previous image.
  * **Auto Play**: Starts cycling images every 2 seconds.
  * **Stop**: Stops the automatic slideshow.
* `setInterval()` and `clearInterval()` handle autoplay timing.

---

## 🧠 JavaScript Breakdown

| Function          | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| `showImage()`     | Updates the `img` element’s `src` with the current image        |
| `nextImage()`     | Increments `currentIndex` and loops back if at the end          |
| `prevImage()`     | Decrements `currentIndex` and loops to the last if at the start |
| `startAutoPlay()` | Begins a slideshow that changes the image every 2 seconds       |
| `stopAutoPlay()`  | Stops the slideshow by clearing the interval                    |

Event listeners are added for all button clicks 🎯

---

## 🔧 Requirements

* Basic HTML structure with:

  * An `img` tag with id `img`
  * Buttons with ids: `next`, `prev`, `auto`, `stop`

Example HTML:

```html
<img id="img" src="" alt="Carousel Image" width="500" />
<button id="prev">⏮️ Previous</button>
<button id="next">⏭️ Next</button>
<button id="auto">▶️ Auto Play</button>
<button id="stop">⏹️ Stop</button>
```

---

## 🚀 Run the Carousel

1. Save your JavaScript code in a file (e.g., `carousel.js`)
2. Include it in your HTML:

```html
<script src="carousel.js"></script>
```

3. Open in your browser and enjoy the image transitions! 🎉

---

## 📬 Feedback or Improvements?

Feel free to extend this with:

* Transition animations 🌀
* Thumbnails or image captions 📑
* Custom time intervals ⏱️

Happy Coding! 💻✨


