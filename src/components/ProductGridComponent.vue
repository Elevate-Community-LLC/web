<template>
  <div class="elcom-section elcom-products" id="products">
    <div class="elcom-container">
        <div class="elcom-title">Experience with Industry Leading Products</div>
        <div class="elcom-content">
            Elevate Community was born from a passion for leveraging cutting-edge technologies to deliver exceptional solutions.
            We specialize in implementing, integrating, and customizing base products to meet the unique needs of our clients, ensuring optimal performance and user satisfaction.
        </div>
        <div class="elcom-card-group-4">
            <a href="/products/procore" class="elcom-card">
                <picture>
                    <img src="@/assets/images/logo-procore-dark.png" loading="lazy" style="scale: 0.9"/>
                </picture>
            </a>
            <a href="/products/salesforce" class="elcom-card">
                <picture>
                    <img src="@/assets/images/logo-salesforce.png" loading="lazy"/>
                </picture>
            </a>
            <a href="/products/sage" class="elcom-card">
                <picture>
                    <img src="@/assets/images/logo-sage.png" loading="lazy"/>
                </picture>
            </a>
            <a href="/products/workato" class="elcom-card">
                <picture>
                    <img src="@/assets/images/logo-workato.png" loading="lazy"/>
                </picture>
            </a>
        </div>
        <div class="elcom-card-group-8">
            <div class="elcom-card">
                <picture>
                    <img src="@/assets/images/logo-ironclad.svg" loading="lazy" style="scale: 0.8;"/>
                </picture>
            </div>
            <div class="elcom-card">
                <picture>
                    <img src="@/assets/images/logo-autodesk.png" loading="lazy" style="filter: invert(1); scale: 0.9"/>
                </picture>
            </div>
            <div class="elcom-card">
                <picture>
                    <img src="@/assets/images/logo-dynamics-fs.png" loading="lazy" style="scale: 0.9;" />
                </picture>
            </div>
            <div class="elcom-card">
                <picture>
                    <img src="@/assets/images/logo-softwrench.png" loading="lazy" style="scale: 0.9;" />
                </picture>
            </div>
            <div class="elcom-card">
                <picture>
                    <img src="@/assets/images/logo-notion.png" loading="lazy" style="filter: invert(1);"/>
                </picture>
            </div>
            <div class="elcom-card">
                <picture>
                    <img src="@/assets/images/logo-aws-dark.png" loading="lazy" style="scale: 0.9;"/>
                </picture>
            </div>
            <div class="elcom-card">
                <picture>
                    <img src="@/assets/images/logo-azure.png" loading="lazy" style="scale: 0.8;"/>
                </picture>
            </div>
            <div class="elcom-card">
                <picture>
                    <img src="@/assets/images/logo-o365.png" loading="lazy" style="scale: 0.9;"/>
                </picture>
            </div>
        </div>
    </div>
</div>
  </template>

  <style scoped lang="css">
  #products {
    background-color: var(--elcom-primary-blue);
}

.elcom-products .elcom-title, .elcom-products .elcom-content {
    color: var(--elcom-background-green);
    margin-bottom: 2rem;
}

.elcom-products .elcom-card-group-4 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 2rem;
    gap: 2rem 0;
}

.elcom-products .elcom-card-group-4 .elcom-card {
    display: flex;
    flex-direction: column;
    width: 25%;
}

.elcom-products .elcom-card-group-8 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 2rem;
    gap: 2rem 0;
}

.elcom-products .elcom-card-group-8 .elcom-card {
    display: flex;
    flex-direction: column;
    width: 12.5%;
}

.elcom-products picture {
    width: 100%;
    height: 4rem;
}

.elcom-products a.elcom-card:hover {
    opacity: 0.7;
    scale: 1.2;
    transition: opacity 0.3s ease, scale 0.3s ease;
}

.elcom-products img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: center;
}

/* Mobile styles */
@media (max-width: 48rem) {
    .elcom-products .elcom-card-group-4 .elcom-card {
        width: 50%;
    }
    .elcom-products .elcom-card-group-8 .elcom-card {
        width: 25%;
    }
}
  </style>
