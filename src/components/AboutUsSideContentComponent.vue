<template>
  <div class="elcom-section elcom-about" id="about">
    <div class="elcom-container">
        <div class="elcom-sbs">
            <div class="elcom-sbs-left">
                <div class="elcom-title">About Us</div>
                <div class="elcom-subtitle">Elevate Community</div>
                <div class="elcom-content">
                    <div>
                        Elevate Community, LLC is dedicated to empowering
                        professionals through contracting services, skills
                        progression, and communities of practice. Our mission
                        is to foster growth and collaboration in the
                        professional world.
                    </div>
                    <div>
                        We have <span class="elcom-subtitle">7+ years</span>
                        of solar and enterprise software experience.
                    </div>
                    <div>
                        Projects in our portfolio include:
                        <ul class="elcom-ul">
                            <li>Application of advanced operational concepts in solar policy and pipelines.</li>
                            <li>Enterprise software consultation, implementation, and integration.</li>
                            <li>Custom configuration, development, and middleware services.</li>
                            <li>Operations and IT project management motivated by conscious spending and ROI.</li>
                        </ul>
                    </div>
                    <a href="mailto:brandon@elevatecommunity.llc" class="elcom-button">Join our Network</a>
                </div>
            </div>
            <div class="elcom-sbs-right">
                <picture>
                    <img src="@/assets/images/about.jpg" loading="lazy" alt="About Us Image"/>
                </picture>
            </div>
        </div>
    </div>
</div>
  </template>

  <style scoped lang="css">
.elcom-about .elcom-sbs {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    gap: 2rem;
}

.elcom-about .elcom-sbs-left, .elcom-about .elcom-sbs-right {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
}

.elcom-about picture {
    height: 100%;
    position: relative;
}

.elcom-about .elcom-title, .elcom-about .elcom-content div {
    margin-bottom: 2rem;
}

.elcom-about img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

/* Mobile styles */
@media (max-width: 48rem) {
    .elcom-about.elcom-section {
        padding-bottom: 0;
    }

    .elcom-about .elcom-sbs {
        flex-direction: column;
        gap: 5rem;
    }

    .elcom-about picture {
        margin: 0 -1rem;
        height: 20rem;
    }
}
  </style>
