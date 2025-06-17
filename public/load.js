window.addEventListener('DOMContentLoaded', loadReviews);

async function loadReviews() {
  try {
    const response = await fetch('/api/reviews');
    const reviews = await response.json();

    console.log(reviews);

    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';
    
    reviews.forEach(review => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>
            <img src= ${review.images}>
            <div>${review.title}</div>
        </td>
        <td>${review.reviewer}</td>
        <td>${review.stars}</td>
        <td>${review.comments}</td>
      `;
      reviewList.appendChild(row);
    });

  } catch (error) {
    console.error('Failed to load reviews:', error);
  }
}
