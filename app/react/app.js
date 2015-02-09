/**
 * Created by barry on 2/5/15.
 */

"strict mode"

var BarryTest = React.createClass({
    render: function() {
        return (
            <div>Hello {this.props.name}</div>
        );
    }
});

React.render(
    <BarryTest name="Barry" />,
    document.getElementById('content')
);