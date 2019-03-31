# jquery.addClassByAtt

A simple jquery plugin that adds a specific class to an element depending on the numerical value of an attribte of an element. It takes 2 parameters:
1. options: An array of dictionaries that include the items: class, minVal and maxVal. Each element in the array specifices a rule - add class class to element if the value of the attribute is between minVal and maxVal
2. attribute: The attribute to check.

### Prerequisites

jquery 2.0.1


### Set up

Install the plugin, and use the following source code as an example. Basic use (using the default syntax), more examples can be found in the demo folder.

##### HTML
```
<h3 class="my-2">Risk assessment table</h3>
<table id="example" class="my-2 table table-bordered">
    <thead>
        <tr>
            <th rowspan="2">Likelihood</th>
            <th colspan="5">Severity</th>
        </tr>
        <tr>
            <th scope="col">Trivial</th>
            <th scope="col">Minor injury</th>
            <th scope="col">Over 3 day injury</th>
            <th scope="col">Major injury</th>
            <th scope="col">Incapacity or death</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Highly unlikely</th>
            <td title="1">1</td>
            <td title="2">2</td>
            <td title="3">3</td>
            <td title="4">4</td>
            <td title="5">5</td>
        </tr>
        <tr>
            <th scope="row">Unlikely</th>
            <td title="2">2</td>
            <td title="4">4</td>
            <td title="6">6</td>
            <td title="8">8</td>
            <td title="10">10</td>
        </tr>
        <tr>
            <th scope="row">Possible</th>
            <td title="3">3</td>
            <td title="6">6</td>
            <td title="9">9</td>
            <td title="12">12</td>
            <td title="15">15</td>
        </tr>
        <tr>
            <th scope="row">Probable</th>
            <td title="4">4</td>
            <td title="8">8</td>
            <td title="12">12</td>
            <td title="16">16</td>
            <td title="20">20</td>
        </tr>
        <tr>
            <th scope="row">Certain</th>
            <td title="5">5</td>
            <td title="10">10</td>
            <td title="15">15</td>
            <td title="20">20</td>
            <td title="25">25</td>
    </tbody>
</table>
```

##### javascript
```
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script src="../dist/jquery.addClassByAtt.min.js"></script>
<script>
    var classes = [
        {'class': 'bg-success text-light', 'minVal': 0, 'maxVal': 4},
        {'class': 'bg-warning text-dark', 'minVal': 5, 'maxVal': 9},
        {'class': 'bg-danger text-light', 'minVal': 10, 'maxVal': 25}
    ];
    $('#example td').addClassByAtt({'options': classes, 'attribute':'title'});
</script>
```

## Examples

View the examples in the demo folder. 

## Author

* **Gareth Cadwaladr** - *Initial work* - [gar-cad](https://github.com/gar-cad)

See also the list of [contributors](https://github.com/gar-cad/jquery.addClassByAtt/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.MD) file for details