var feedmirror = {
  initialize: function(fmSettings) {
    var request = new XMLHttpRequest();

    request.open('GET', fmSettings.feedURL, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!

        // Currently only Medium integration is supported
        if(fmSettings.integration == 'medium-embed') {
          // Medium JSON has hijacking code at the beginning
          var data = request.responseText.split('])}while(1);</x>')[1]
          var data = JSON.parse(data);
          fmBuild(fmSettings.integration, data);
        } else {
          console.log('FEEDMIRROR: Integration "'+fmSettings.integration+'" is not supported.');
        }
      } else {
        // We reached our target server, but it returned an error
        console.log("FEEDMIRROR: The server returned an error.");
      }
    };

    function fmBuild(integrationType, data) {
      if(integrationType == 'medium-embed') {
        var fmPostsParent = data.payload.references.Post;
        if(data.payload.user) {
          // this is a profile
          var fmMediumUser = '@' + data.payload.user.username;
        } else {
          // this is a publication
          var fmMediumUser = data.payload.collection.slug;
        }

        var fmPosts = fmPostsParent;
        var fmPostKeys = Object.keys(fmPosts);
        //var mediumImageCDN = 'https://cdn-images-1.medium.com/fit/t/1600/480/';
        var mediumImageCDN = 'https://cdn-images-1.medium.com/fit/t/290/290/';
        var mediumProfileURL = 'https://medium.com/' + fmMediumUser + '/';
        var fmPostsCount = 4;
        var fmLinkOutText = 'Read all articles';
        var fmTarget = '_parent';
        if(fmSettings.openNewTab == true) {
          fmTarget = '_blank';
        }

        if(fmSettings.linkOutText != undefined) {
          fmLinkOutText = fmSettings.linkOutText;
        }

        if(fmSettings.postsCount - 1 < 4) {
          fmPostsCount = fmSettings.postsCount - 1
        }

        var fmEmbed = document.getElementById(fmSettings.element);

        var fmLinkOut = document.createElement('div');
        fmLinkOut.className = 'fm-medium-profile';


        fmPostKeys.forEach(function(element, index){
          var post = fmPosts[element];
          var postVirtuals = post.virtuals;

          var itemWrapper = document.createElement('div');
          itemWrapper.className = 'fm-post-wrapper';
          var item = document.createElement('div');
          var postTitle = post.title;
          var postImage = postVirtuals.previewImage.imageId;
          var postSubTitle = post.content.subtitle;
          var postUniqueSlug = post.uniqueSlug;
          var postURL = mediumProfileURL + postUniqueSlug;

          var fmPostImageHTML = '<a class="fm-post-image" target="'+fmTarget+'" href="'+postURL+'"><img style="width: 100%" src="'+mediumImageCDN + postImage+'"/></a>';
          var fmPostTitleHTML = '<h4 class="fm-post-title"><a href="'+postURL+'" target="'+fmTarget+'">'+postTitle+'</a></h4>';
          var fmPostSubTitleHTML = '<p class="fm-post-sub-title">'+postSubTitle+'</p>';
          var fmPostReadMoreHTML = '<a class="fm-post-read-more" target="'+fmTarget+'" href="' + postURL + '">' + fmLinkOutText +'</a>';

          item.innerHTML =  '<div class="fm-post">' + fmPostImageHTML + fmPostTitleHTML + fmPostSubTitleHTML + fmPostReadMoreHTML + '</div>';

          if(index <= fmPostsCount) {
            itemWrapper.appendChild(item);
            fmEmbed.appendChild(itemWrapper);
            fmEmbed.appendChild(fmLinkOut);
          }

        })
      }

    }

    request.onerror = function() {
      // There was a connection error of some sort
      console.log('Error fetching FEEDMIRROR feed.');
    };

    request.send();

    var embeds = new XMLHttpRequest();
    var url = window.location.href;
    var feedId = fmSettings.feedURL
      .split("feedmirror.com")[1]
      .split(".json")[0];
    embeds.open(
      "GET",
      "https://feedmirror.com/embeds?url=" + url + "&feedId=" + feedId,
      true
    );
    embeds.send();
  }
}
