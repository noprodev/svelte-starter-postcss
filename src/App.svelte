<script>
export let greeting = "Hello World!";
</script>

<style>
main {
    width: 35em;
    max-width: calc(100vw - 3em);
    & > h1 {
        color: green;
    }
}
</style>

<main>
    <h1>{greeting}</h1>
</main>