# live-streaming
<h1>Overview</h1>
<a href="https://streamy-app.herokuapp.com/">Demo</a>
<p>Allows users to directly stream video/audio by configured their OBS to rtmp://localhost/live/ with the Stream Key equal to the ID of the stream. Which can be found on the ending URL of the stream you are viewing. Please note that actual streaming is only available on localhost and you must sign in with google to create a stream.</p>

<p>
 This app is mostly focus on React and Redux. There is separate api server for storing the list of all the different streams or channels that are available inside this application.
</p>

<h2>Technologies used:</h2>
<ul>
    <li><a href="https://reactjs.org/">React.js</a>: A javascript Library for building user Interfaces</li>
    <li><a href="https://redux.js.org/">Redux.js</a>: A predictable state container for javascript apps. It maintains the state of an entire application in a single immutable state tree (object), which can't be changed directly. When something changes, a new object is created (using actions and reducers).
    </li>
    <li><a href="https://nodejs.org/en/">node.js</a>: Fo backend.</li>
    <li><a href="http://jsonplaceholder.typicode.com/">JSONPlaceholder</a>: TO create an api and storing the list of data created.
    </li>
</ul>

<h2> Get Started </h3>
<p>Clone the repository</p>
<p><code>git clone git@github.com:pracharya2601/live-streaming.git</code></p>
<p>Get into directory<code>cd live-streaming</code>.</p>
<p>Get into client, api and rtmpserver and run <code>npm install</code>.</p>
<p>Run<code>npm start</code> on each directoty to get run the programme.</p>
