// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button5")
                .setDirtyMark(false)
                .setLeft("28.333333333333332em")
                .setTop("20em")
                .setCaption("hello")
                .onClick([
                    {
                        "desc":"Action 1",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "hello {page.xui_ui_comboinput17.getValue()}",
                            undefined,
                            200,
                            5000
                        ],
                        "method":"message"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput17")
                .setDirtyMark(false)
                .setLeft("21.666666666666668em")
                .setTop("16.666666666666668em")
                .setWidth("16.333333333333332em")
                .setLabelSize("8em")
                .setLabelCaption("your name")
                .setType("getter")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});