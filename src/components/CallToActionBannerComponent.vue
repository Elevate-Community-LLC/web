<template>
<div class="elcom-section elcom-cta" id="contact">
    <div class="elcom-container">
        <div class="elcom-title">Ready to Elevate Your Technology Presence?</div>
        <div class="elcom-subtitle">Set an introductory call to see how you can get involved.</div>
        <a href="mailto:brandon@elevatecommunity.llc" class="elcom-button">Contact Us</a>
    </div>
</div>
</template>

<style lang="css" scoped>
.elcom-cta {
    background-color: var(--elcom-primary-blue);
}

.elcom-cta .elcom-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.elcom-cta .elcom-title {
    color: var(--elcom-background-green);
}

.elcom-cta * {
  text-align: center;
    margin-bottom: 0.5rem;
}

.elcom-cta *:last-child {
    margin-top: 1rem;
    margin-bottom: 0;
}

@media (max-width: 48rem) {
    .elcom-cta .elcom-title {
        font-size: 1.5rem;
    }

    .elcom-cta .elcom-subtitle {
        font-size: 1.2rem;
    }
}
</style>
