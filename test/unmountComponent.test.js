// jsx-test
var jsx = require('../index');
var React = require('react');
var assert = require('assert');

var Component = React.createClass({
    displayName: 'TestComp',
    componentWillUnmount: function () {
        this.isUnmountCalled = true;
    },
    render: function () {
        return React.createElement('div');
    }
});

describe('#unmountComponent', function() {
    it('unmountComponent the component', function () {
        var comp = jsx.renderComponent(Component);

        assert.equal(comp.isMounted(), true);
        jsx.unmountComponent(comp);
        assert.equal(comp.isUnmountCalled, true);
        assert.notEqual(comp.isMounted(), true);
    });
});
