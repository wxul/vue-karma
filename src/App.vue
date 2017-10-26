<template>
    <div class="app">msg:{{msg}}</div>
</template>
<script>
export default {
    data() {
        return {
            msg: 'this is message.'
        };
    },
    mounted() {
        this.msg = 'mounted!';
    },
    methods: {
        hello(w) {
            return 'hello' + w;
        }
    }
};
</script>
