$.getJSON("/_data/machgen/issuesjson.json", function (data) { renderissues(data.filter(issue => issue.state == "open"));});


function capitalize_all(mySentence) {
    const words = mySentence.split(" ");

    return words.map((word) => { 
        return word[0].toUpperCase() + word.substring(1).toLowerCase(); 
    }).join(" ");
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function intersects(array1,array2) {
    return array1.filter(item => array2.includes(item)).length > 0;
}

class IssueCategoriesButtons extends React.Component {
    render() {
        var categories=this.props.categories;
        var filteredissues=this.props.filteredissues;

        var ret=[];

        for (var categoryname in categories) {
            var category=categories[categoryname];
            var issues=filteredissues.filter(issue => intersects(JSON.parse(issue.issue.labels), category.labelnames));
            var issuesLength=issues.length;

            if (issues.length > 0) {
                ret.push(<div className="col-12 col-sm-6 mb-15"><a href={""+category.permalink} className="btn btn-primary btn-block text-left h-100" title={"Vedi tutte le segnalazioni della categoria " + category.displayname}>
                    <span className="fa-stack text-left" aria-label="logo del marker della segnalazione" role="img">
                    <i className="fa fa-circle fa-stack-2x" aria-hidden="true" style={{color:category.markercolor}}></i>
                    <i className={"fa fa-"+category.markericon + " fa-stack-1x fa-inverse"} aria-hidden="true"></i>
                    </span>
                    <span className="text-center">{category.displayname[page.lang]} <span className="badge badge-pill badge-secondary">{issuesLength}</span></span></a>
                    </div>
                );
            }
        }

        return (<>{ret}</>);
    }
}

function issueGetCoords(issue) {
    var coords=[];
    if (issue.issue.data.hasOwnProperty('Posizione')) {
        coords = issue.issue.data.Posizione.split(" ").map((coord) =>  {return parseFloat(coord);});
    } else if (issue.issue.data.hasOwnProperty('address')) {
        if (issue.issue.data.address.hasOwnProperty('address')) {
            if (issue.issue.data.address.address.hasOwnProperty('lat') && issue.issue.data.address.address.hasOwnProperty('lon')) {
                coords = [issue.issue.data.address.address.lat, issue.issue.data.address.address.lon];
            }
        }
    } else if (issue.issue.data.hasOwnProperty('location')) {
        if (issue.issue.data.location.hasOwnProperty('address')) {
            if (issue.issue.data.location.address.hasOwnProperty('lat') && issue.issue.data.location.address.hasOwnProperty('lon')) {
                coords = [parseFloat(issue.issue.data.address.address.lat), parseFloat(issue.issue.data.address.address.lon)];
            }
        }
    }
    return coords;
}

function issueGetCategory(labels, categories) {
    for (var key in categories) {
        var category = categories[key];

        if (intersects(labels, category.labelnames)) {
            return category;
        }
    }
    return null;
}

function IssueData(props) {
    var issuedata=props.issue.issue.data;
    var ret=[]
    for (var key in issuedata) {
        var val;
        val=issuedata[key];
        key=capitalize_all(key);
        if (!issueFieldsBlacklist.includes(key)) {
            ret.push(<dt className="col-sm-3">{key}</dt>);
            if (key == "Address") {
                var addressRender=[];
                if (val.hasOwnProperty('address')) {
                    var addressField = val['address'];
                    if (addressField.hasOwnProperty('address')) {
                        var address=addressField['address'];
                        if (address.hasOwnProperty('city')) {
                            addressRender.push(
                                <><dt className="col-sm-3">City</dt>
                                <dd className="col-sm-9">{address["city"]}</dd></>);
                        }
                        if (address.hasOwnProperty('country')) {
                            addressRender.push(
                                <><dt className="col-sm-3">Country</dt>
                                <dd className="col-sm-9">{address["country"]}</dd></>);
                        }
                    }
                }
                ret.push(<dd className="col-sm-9"><dl className="row">{addressRender}</dl></dd>);
            } else if (key == "Location") {
                var addressRender=[];
                if (val.hasOwnProperty('address')) {
                    var addressField = val['address'];
                    if (addressField.hasOwnProperty('address')) {
                        var address=addressField['address'];
                        if (address.hasOwnProperty('city')) {
                            addressRender.push(
                                <><dt className="col-sm-3">City</dt>
                                <dd className="col-sm-9">{address["city"]}</dd></>);
                        }
                        if (address.hasOwnProperty('country')) {
                            addressRender.push(
                                <><dt className="col-sm-3">Country</dt>
                                <dd className="col-sm-9">{address["country"]}</dd></>);
                        }
                    }
                }
                ret.push(<dd className="col-sm-9"><dl className="row">{addressRender}</dl></dd>);
            } else if (key == "Description") {
                const options = { defaultProtocol: 'https' };

                ret.push(<dd className="col-sm-9"><Linkify>{val.trim()}</Linkify></dd>);
            } else {
                ret.push(<dd className="col-sm-9">{val.trim()}</dd>);
            }
        }
    }


    return <>{ret}</>;
}

class IssueSocialShare extends React.Component {
    render () {
        var issue=this.props.issue;

        var shareurl=siteurl+"/issues/"+issue.number+"&title="+issue.title.slice(0,70)+"%20%7C%20"+sitetitle;

        return (<>
            <a className="card-link fa-stack" href={siteurl+"/issues/"+issue.number}
            title="Copia link">
            <i className="fas fa-circle fa-stack-2x" aria-hidden="true"></i>
            <span className="fas fa-link fa-stack-1x fa-inverse" aria-hidden="true"></span>
            </a>

            <a className="card-link fa-stack" href={"https://www.facebook.com/sharer/sharer.php?u="+shareurl}
            title="Share on Facebook" target="_blank">
            <i className="fa fa-circle fa-stack-2x" aria-hidden="true"></i>
            <i className="fa fa-facebook fa-stack-1x fa-inverse" aria-hidden="true"></i>
            </a>

            <a className="card-link fa-stack" href={"https://twitter.com/intent/tweet?text="+shareurl+"&via=europehelp&hashtags=europehelp"}
            title="Share on Twitter" target="_blank">
            <i className="fa fa-circle fa-stack-2x" aria-hidden="true"></i>
            <i className="fa fa-twitter fa-stack-1x fa-inverse" aria-hidden="true"></i>
            </a>

            <a className="card-link fa-stack" href={"https://www.linkedin.com/shareArticle?mini=true&url="+shareurl}
            title="Share on LinkedIn" target="_blank">
            <i className="fa fa-circle fa-stack-2x" aria-hidden="true"></i>
            <i className="fa fa-linkedin fa-stack-1x fa-inverse" aria-hidden="true"></i>
            </a>
            </>);
    }
}

class IssueMiniMap extends React.Component {
    componentDidMount() {
        //Runs only on the first render
        var issue=this.props.issue;
        var category=this.props.category;
        var coords=this.coords;

        if (coords.length > 0) {
            var iconaDefault = L.AwesomeMarkers.icon({icon: '', markerColor: 'darkpurple'});


            // initialize the map
            var map = L.map("map"+issue.number+category.displayname, {
                scrollWheelZoom: false
            });

            // create the tile layer with correct attribution
            var osmUrl=sitetilemap;
            var osmAttrib='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>';
            var osm = new L.TileLayer(osmUrl, {minZoom: 5, maxZoom: 19, attribution: osmAttrib});

            var markers = L.markerClusterGroup();

            var lat = parseFloat(coords[0]);
            var lon = parseFloat(coords[1]);
            var popupText = issue.title;
            var popupURL = issue.number;
            var labels = issue.issue.labels;
            var iconaFinale = iconaDefault;

            iconaFinale = L.AwesomeMarkers.icon({icon: category.markericon, markerColor: category.markercolor, prefix: 'fa'});

            if (!isNaN(lat) && !isNaN(lon)) {
                var markerLocation = new L.LatLng(lat, lon);
                var marker = new L.Marker(markerLocation, {icon: iconaFinale});

                markers.addLayer(marker);

                marker.bindPopup("<a href=\"/issues/" + popupURL + "\">" + decodeURI(popupText) + "</a>");
            }

            map.addLayer(markers);

            map.addLayer(osm).setView([0,0], 9);

            map.fitBounds(markers.getBounds().pad(10.0));
            map.setZoom(12);
        }
    }
    render() {
        var issue=this.props.issue;
        var category=this.props.category;

        var coords=issueGetCoords(issue);

        this.coords=coords;


        if (this.coords.length > 0) {
            return (<> <dt className="col-sm-3">Map</dt> <dd className="col-sm-9"><div id={"map"+issue.number+category.displayname} className="w-100" style={{height: "200px"}}></div></dd> </>);
        } else {
            return null;
        }
    }
}

class IssueCard extends React.Component {
    render() {
        var issue=this.props.issue;
        var category=this.props.category;
        var issuelist =
            <div className="card" id={"issue"+issue.number}>
            <div className="card-body issuepanel">
            <a href={"/issues/"+issue.number}><h4 className="card-title">{issue.title}</h4></a>
            <dl className="row">
            <IssueData issue={issue}/>
            <IssueMiniMap issue={issue} category={category}/>
            </dl>
            <div className="card-footer">
            <b>Share:</b> <IssueSocialShare issue={issue} />
            </div>
            </div>
            </div>
            ;

        return <div className="col-md-12 col-sm-12 col-12 mb-15">{issuelist} </div>;

    }
}

class IssueCardList extends React.Component {
    render() {
        var issues=this.props.issues;
        var category=this.props.category;

        var issuelist = issues.map(function(issue){
            return (
                <IssueCard issue={issue} category={category} />
            );

        });

        return <div className="col-md-12 col-sm-12 col-12 mb-15">{issuelist} </div>;

    }
}

class IssueCategoriesList extends React.Component {
    render() {
        var categories=this.props.categories;
        var filteredissues=this.props.filteredissues;

        var ret=[];

        for (var categoryname in categories) {
            var category=categories[categoryname];
            var issues=filteredissues.filter(issue => intersects(JSON.parse(issue.issue.labels), category.labelnames));
            var issuesLength=issues.length;
            issues=shuffleArray(issues);
            if (maxIssuesForCategory > 0) {
                issues=issues.slice(0,maxIssuesForCategory);
            }
            if (issues.length > 0) {
                ret.push (<><h2 id={""+category.permalink}>{category.displayname[page.lang]}<span className="badge badge-pill badge-primary">{issuesLength}</span></h2><IssueCardList issues={issues} category={category} />

                    </>);
                if (maxIssuesForCategory > 0 && issuesLength > maxIssuesForCategory) {
                    ret.push (<div className="row">
                        <div className="col-12 col-lg-12 col-md-12"><a href={""+category.permalink} title={"Vedi tutte le segnalazioni della categoria" + category.displayname} className="btn btn-primary btn-lg">See all {category.displayname}</a></div>
                        <hr className="col-12 col-lg-12 col-md-12" />
                        </div>);
                }
            }
        };

        return <div>{ret}</div>;
    }
}

class IssueFullMap extends React.Component {
    componentDidMount() {

        var filteredissues=this.props.filteredissues;
        var categories = this.props.categories;
        var iconaDefault = L.AwesomeMarkers.icon({icon: '', markerColor: 'darkpurple'});

        // initialize the map
        var map = L.map("mapAll", { scrollWheelZoom: false });

        // create the tile layer with correct attribution
        var osmUrl=sitetilemap;
        var osmAttrib='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>';
        var osm = new L.TileLayer(osmUrl, {minZoom: 5, maxZoom: 19, attribution: osmAttrib});
        map.addLayer(osm).setView([0,0], 9);

        var markers = L.markerClusterGroup();

        filteredissues.map((issue) => {
            var coords=issueGetCoords(issue);
            if (coords.length > 0) {
                var lat = parseFloat(coords[0]);
                var lon = parseFloat(coords[1]);
                var popupText = issue.title;
                var popupURL = issue.number;
                var labels = JSON.parse(issue.issue.labels);
                var iconaFinale = iconaDefault;

                var category = issueGetCategory(labels, categories);

                if (category) {
                    iconaFinale = L.AwesomeMarkers.icon({icon: category.markericon, markerColor: category.markercolor, prefix: 'fa'});

                    if (!isNaN(lat) && !isNaN(lon)) {
                        var markerLocation = new L.LatLng(lat, lon);
                        var marker = new L.Marker(markerLocation, {icon: iconaFinale});

                        marker.bindPopup("<a href=\"/issues/" + popupURL + "\">" + decodeURI(popupText) + "</a>");
                        markers.addLayer(marker);
                    }
                }
            }

        });
        map.addLayer(markers);


        map.fitBounds(markers.getBounds().pad(0.3));
    }

    render() {
        var filteredissues=this.props.filteredissues;


        this.filteredissues=filteredissues;

        return (<div className="col-md-12 col-sm-12 col-12"> <div id="mapAll" className="w-100" style={{height: "600px"}}></div> </div>);
    }
}

function renderissues(filteredissues) {

    ReactDOM.render(
        <IssueCategoriesButtons categories={issueCategories} filteredissues={filteredissues} />,
        document.getElementById('issuebuttons')
    );
    ReactDOM.render(
        <IssueCategoriesList categories={issueCategories} filteredissues={filteredissues} />,
        document.getElementById('issue-card')
    );
    ReactDOM.render(
        <IssueFullMap categories={issueCategories} filteredissues={filteredissues} />,
        document.getElementById('issuemap')
    );

}
