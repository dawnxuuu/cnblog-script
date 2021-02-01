function GenerateContentList () {
  var mainContent = $('#cnblogs_post_body');
  var h1_list = $('#cnblogs_post_body h1');

  if(mainContent.length < 1) return;
  
  if(h1_list.length>0) {
      var content = '<a name="_labelTop"></a>';
      content += '<div id="navCategory">';
      content += '<p style="font-size:18px"><b>目录</b></p>';
      content += '<ul>';

      for(var i=0; i<h1_list.length; i++) {
          var go_to_top = '<div style="text-align:right;color:#a5a593;font-weight:bold;font-size:16px"><a href="#_labelTop">⤴️</a><a name="_label' + i + '"></a></div>';
          $(h1_list[i]).before(go_to_top);
          
          var h2_list = $(h1_list[i]).nextAll("h2");
          var li2_content = '';
          for(var j=0; j<h2_list.length; j++)
          {
              var tmp = $(h2_list[j]).prevAll('h1').first();
              if(!tmp.is(h1_list[i]))
                  break;
              var li3_anchor = '<a name="_label' + i + '_' + j + '"></a>';
              $(h2_list[j]).before(li3_anchor);
              li2_content += '<li><a href="#_label' + i + '_' + j + '">' + $(h2_list[j]).text() + '</a></li>';
          }
          
          var li1_content = '';
          if(li2_content.length > 0)
              li1_content = '<li><a href="#_label' + i + '">' + $(h1_list[i]).text() + '</a><ul>' + li2_content + '</ul></li>';
          else
              li1_content = '<li><a href="#_label' + i + '">' + $(h1_list[i]).text() + '</a></li>';
          content += li1_content;
      }

      content += '</ul>';
      content += '</div><p>&nbsp;</p>';

      if($('#cnblogs_post_body').length != 0 ) {
        $($('#cnblogs_post_body')[0]).prepend(content);
      }
  }
}
GenerateContentList()