function scrollToPosition() {
    // Specify the target position on the page where you want to scroll
    const targetPosition = 500; // Change this value to your desired position

    // Scroll smoothly to the target position
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
}