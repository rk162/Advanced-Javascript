const txtPostName = document.getElementById('txtPostName');
const txtPostMsg = document.getElementById('txtPostMsg');
const btnNewPostMsg = document.getElementById('btnNewPostMsg');

function updatePostbox(PostPost) {
    var PostData = '<p><b>' + PostPost.Post;
    PostData += '</b> said: ' + PostPost.message;
    PostData += ' - <small>' + PostPost.date + '</small><p>';

    // inject into HTML list element
    var currentPostbox = document.getElementById('postBox').innerHTML;
    document.getElementById('postBox').innerHTML = currentPostbox + PostData;
    for(var i=0;i<10000;i++){
        document.body.appendChild(document.createElement('div'))
    }
    var ref=[];
    ref.push(new Array(100000).join('x'))
}

// new Postbox entry

btnNewPostMsg.addEventListener('click', e => {
    
    const Post = txtPostName.value;
    const msg = txtPostMsg.value;
    const now = new Date();
    const PostPost = {
        Post: Post,
        message: msg,
        date: now.toUTCString()
    };

    // update posts
    updatePostbox(PostPost);

    // clear textbox
    document.getElementById('txtPostName').value = '';
    document.getElementById('txtPostMsg').value = '';
    console.clear();
});


//Under Performance
//Code Expectations
//Runtime Surprises
//Detection of Problem Root

//need to crack down offenders
//Not interfere with UX