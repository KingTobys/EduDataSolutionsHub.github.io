document.addEventListener('DOMContentLoaded', () => {
    // Handle project form submissions
    document.getElementById('project-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('project-title').value;
        const description = document.getElementById('project-description').value;
        const summary = document.getElementById('project-summary').value;

        const projectHtml = `
            <div class="project">
                <h2>${title}</h2>
                <p>Description and Objectives: ${description}</p>
                <p>Summary: ${summary}</p>

                <div class="forum">
                    <h3>Comments</h3>
                    <form class="comment-form">
                        <input type="text" class="comment-name" placeholder="Name" required>
                        <input type="text" class="comment-expertise" placeholder="Expertise" required>
                        <textarea class="comment-text" placeholder="Your Comment" required></textarea>
                        <button type="submit">Post Comment</button>
                    </form>
                    <div class="comments-section">
                        <!-- Comments will be appended here -->
                    </div>
                </div>

                <div class="like-dislike">
                    <button class="like-button">Like</button>
                    <button class="dislike-button">Dislike</button>
                    <span class="like-count">Likes: 0</span>
                    <span class="dislike-count">Dislikes: 0</span>
                </div>
            </div>
        `;

        document.querySelector('#projects-list').insertAdjacentHTML('beforeend', projectHtml);

        // Clear the form
        document.getElementById('project-form').reset();
    });

    // Handle comment submissions
    document.addEventListener('submit', function(event) {
        if (event.target.classList.contains('comment-form')) {
            event.preventDefault();

            const name = event.target.querySelector('.comment-name').value;
            const expertise = event.target.querySelector('.comment-expertise').value;
            const commentText = event.target.querySelector('.comment-text').value;

            const commentHtml = `
                <div class="comment">
                    <p><strong>${name}</strong> (${expertise})</p>
                    <p>${commentText}</p>
                </div>
            `;

            event.target.nextElementSibling.insertAdjacentHTML('beforeend', commentHtml);

            // Clear the comment form
            event.target.reset();
        }
    });

    // Handle like and dislike button clicks
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('like-button')) {
            const likeCountElement = event.target.nextElementSibling.nextElementSibling;
            let count = parseInt(likeCountElement.textContent.replace('Likes: ', ''));
            count += 1;
            likeCountElement.textContent = `Likes: ${count}`;
        } else if (event.target.classList.contains('dislike-button')) {
            const dislikeCountElement = event.target.nextElementSibling;
            let count = parseInt(dislikeCountElement.textContent.replace('Dislikes: ', ''));
            count += 1;
            dislikeCountElement.textContent = `Dislikes: ${count}`;
        }
    });

    // Handle news form submissions
    document.getElementById('news-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('news-title').value;
        const content = document.getElementById('news-content').value;

        const newsHtml = `
            <div class="news-article">
                <h3>${title}</h3>
                <p>${content}</p>
            </div>
        `;

        document.querySelector('#news-list').insertAdjacentHTML('beforeend', newsHtml);

        // Clear the form
        document.getElementById('news-form').reset();
    });

    // Handle publication form submissions
    document.getElementById('upload-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('publication-name').value;
        const file = document.getElementById('pdf-file').files[0];
        const link = document.getElementById('publication-link').value;

        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const publicationHtml = `
                    <div class="publication">
                        <h3>${name}</h3>
                        <p><a href="${e.target.result}" download>Download PDF</a></p>
                        <p>Link: <a href="${link}" target="_blank">${link}</a></p>
                    </div>
                `;
                document.querySelector('#uploaded-publications').insertAdjacentHTML('beforeend', publicationHtml);
            };
            reader.readAsDataURL(file);
        }

        // Clear the form
        document.getElementById('upload-form').reset();
    });

    // Handle member form submissions
    document.getElementById('member-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('member-name').value;
        const bio = document.getElementById('member-bio').value;
        const contact = document.getElementById('member-contact').value;

        const memberHtml = `
            <div class="member">
                <div class="member-details">
                    <div>
                        <h3>${name}</h3>
                        <p>${bio}</p>
                        <p>Contact: ${contact}</p>
                    </div>
                    <button class="follow-button">Follow</button>
                </div>
            </div>
        `;

        document.querySelector('#members-list').insertAdjacentHTML('beforeend', memberHtml);

        // Clear the form
        document.getElementById('member-form').reset();
    });
});

function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    document.getElementById(tabId).style.display = 'block';
}
