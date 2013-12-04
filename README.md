# Meteor-Moot
Forums and commenting re-imagined. You can now easily integrate moot into Meteor to add comments and forums in one line.

Official site: [moot.it](https://moot.it)

Doc: [Documentation](https://moot.it/docs/)

# Setup
Let's use the following DIV tag:
```
<div id="my-moot"></div>
```
You can install Moot inside this tag with JavaScript as follows:
```
$("#my-moot").moot({
   url: "https://moot.it/i/goma/exhibitions/2012:anders-baumann",
   title: "Anders Baumann Exhibition"
});
```

You select the element with a jQuery selector and call moot with a configuration object. The available configuration options are:


* `url` the discussion path.
* `title` the human readable name of a commenting thread. By default the title is taken from the document's' title
* `show_online` to show / hide online user list
* `upload` to enable / disable image uploading (default: true)


**Note**: multiple  instances of moot is not supported.
