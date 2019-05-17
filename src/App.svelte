<script>
export let greeting = "Hello World!";
</script>

<style lang="postcss">
main {
    width: 35em;
    max-width: calc(100vw - 3em);
    margin: 1.5em auto;
    & > h1 {
        color: green;
    }
}
</style>

<main>
    <h1>{greeting}</h1>
</main>