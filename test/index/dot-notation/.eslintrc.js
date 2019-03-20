module.exports = {
    rules: {
        /**
         * @category best-practices
         * @description 禁止出现 foo['bar']，必须写成 foo.bar
         * @reason 当需要写一系列属性的时候，可以更统一
         * @fixable
         */
        'dot-notation': 'off'
    }
};