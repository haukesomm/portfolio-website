<script lang="ts">
    export let path: string
    export let color: string | undefined = undefined
</script>

<svg role="img" viewBox="0 0 24 24">
    <path fill={color || "currentColor"} d="{path}"></path>
</svg>