import App from '@src/App.vue';
import Vue from 'vue';

var expect = require('chai').expect;

describe('app组件', () => {
    it('检查mounted', () => {
        expect(App.mounted).to.a('function');
    });
    it('检查data', () => {
        expect(App.data).to.a('function');
    });
    it('检查hello方法', () => {
        const vm = new Vue(App).$mount();
        expect(vm.hello).to.a('function');
        expect(vm.hello(' world!')).to.equal('hello world!');
    });
    it('检查初始msg字段', () => {
        expect(App.data).to.a('function');
        expect(App.data().msg).to.equal('this is message.');
    });
    it('检查msg字段', () => {
        const vm = new Vue(App).$mount();
        expect(vm.msg).to.equal('mounted!');
    });
    it('检查渲染实例', () => {
        const Ctor = Vue.extend(App);
        const vm = new Ctor().$mount();
        expect(vm.$el.textContent).to.equal('msg:this is message.');
    });
    it('检查渲染更新', done => {
        const vm = new Vue(App).$mount();
        vm.msg = 'message2';
        // 在状态改变后和断言 DOM 更新前等待一刻
        Vue.nextTick(() => {
            expect(vm.$el.textContent).to.equal('msg:message2');
            done();
        });
    });
});
