// Função para carregar o arquivo CSV
async function loadCSV(filePath) {
    try {
        const response = await fetch(filePath);
        const data = await response.text();
        return parseCSV(data);
    } catch (error) {
        console.error("Erro ao carregar o CSV:", error);
    }
}

// Função para converter CSV em um array de objetos
function parseCSV(data) {
    const rows = data.split("\n").filter(row => row.trim());
    const headers = rows.shift().split(",");
    return rows.map(row => {
        const values = row.split(",");
        return headers.reduce((acc, header, index) => {
            acc[header.trim()] = values[index].trim();
            return acc;
        }, {});
    });
}

function renderFeaturedPost(post) {
    const featuredPost = document.getElementById("destaque");
    featuredPost.innerHTML = `
        <div class="banner">
            <img src="_database/img/${post.image}" alt="Capa do post ${post.title}" class="banner-image">
            <div class="banner-content">
                <h2><a href="post.html?id=${post.id}">${post.title}</a></h2>
                <p>${post.content.substring(0, 150)}...</p>
            </div>
        </div>
    `;
}

function renderPosts(posts) {
    const postList = document.getElementById("lista-publicacoes");

    if (posts.length === 0) {
        postList.innerHTML = "<p>Não há posts disponíveis.</p>";
        return;
    }

    posts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.className = "card-post";

        postDiv.innerHTML = `
            <img src="_database/img/${post.image}" alt="Capa do post ${post.title}" class="post-image">
            <h2><a href="/posts/posts.html?id=${post.id}">${post.title}</a></h2>
            <time>${new Date(post.date).toLocaleDateString("pt-BR")}</time>
            <p>${post.content.substring(0, 100)}...</p>
        `;
        postList.appendChild(postDiv);
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    const posts = await loadCSV("_database/posts.csv");
    
    if (posts && posts.length > 0) {
        renderFeaturedPost(posts[0]);
        renderPosts(posts);
    } else {
        document.getElementById("featured-post").innerHTML = "<p>Nenhum post disponível para destaque.</p>";
    }
});