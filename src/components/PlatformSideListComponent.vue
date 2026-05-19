<template>
  <div class="elcom-section elcom-platforms" id="platforms">
    <div class="elcom-container">
        <div class="elcom-title">Excel Within and Across Platform Verticals</div>
        <div class="elcom-half-container">
            <picture class="elcom-half-left">
                <img src="@/assets/images/platforms.jpg" loading="lazy"/>
            </picture>
            <div class="elcom-half-right elcom-pane">
                <a href="/platforms/sales" class="elcom-card">
                    <img src="@/assets/icons/handshake.svg" loading="lazy"/>
                    <span class="elcom-subtitle">Sales</span>
                </a>
                <a href="/platforms/work-management" class="elcom-card">
                    <img src="@/assets/icons/clipboard.svg" loading="lazy"/>
                    <span class="elcom-subtitle">Work Management</span>
                </a>
                <a href="/platforms/field-operations" class="elcom-card">
                    <img src="@/assets/icons/tools.svg" loading="lazy"/>
                    <span class="elcom-subtitle">Field Operations</span>
                </a>
                <a href="/platforms/finance-accounting" class="elcom-card">
                    <img src="@/assets/icons/calculator.svg" loading="lazy"/>
                    <span class="elcom-subtitle">Finance &amp; Accounting</span>
                </a>
            </div>
        </div>
    </div>
</div>
  </template>

  <style scoped lang="css">
#platforms .elcom-title {
    margin-bottom: 2rem;
}

#platforms .elcom-half-container {
    height: 24rem;
}

#platforms .elcom-half-left {
    height: 100%;
    max-height: 60vh;
    overflow: hidden;
}

#platforms .elcom-pane {
    background-color: var(--elcom-background-blue);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    position: relative;
    max-width: 17.6rem;
}

#platforms .elcom-pane::after {
    content: "";
    position: absolute;
    top: 0;
    right: min(0rem, calc(37.5rem - 50vw));
    width: max(0rem, calc(50vw - 37.5rem));
    height: 24rem;
    background-color: var(--elcom-background-blue);
}

#platforms .elcom-pane img {
    filter: invert(1);
}

#platforms .elcom-pane .elcom-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    transform-origin: left center;
    padding: 1rem 0;
}

#platforms .elcom-pane .elcom-subtitle {
    color: var(--elcom-background-green);
    margin: 0;
}

#platforms .elcom-card:hover {
    opacity: 0.7;
    scale: 1.1;
    transition: opacity 0.3s ease, scale 0.3s ease;
}

@media (max-width: 64rem) {
    #platforms .elcom-half-container {
        flex-direction: column;
        gap: 2rem 0;
        height: auto;
        width: 100%;
        overflow-x: hidden;
    }

    #platforms .elcom-pane {
        max-width: initial;
        width: 100%;
        align-items: flex-start;
    }
}
  </style>
