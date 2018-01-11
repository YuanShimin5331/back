$(function(){
    // 配置规则：
    //  1.用户名不能为空
    // 密码不能为空，且长度是6-12
    // 获取form
    var $form = $("form");
    $form.bootstrapValidator({

      feedbackIcons: {
        //校验成功的图标
        valid: 'glyphicon glyphicon-ok',
        invalid:'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },

        //校验规则
        fields:{
            username: {
                //username的规则
                validators: {
                  notEmpty: {
                    message: "用户名不能为空"
                  },
                  callback: {
                    message:"用户名不存在"
                  }
                }
        
            },
            password: {
        
                //password的规则
                validators: {
                  notEmpty: {
                    message: "用户密码不能为空"
                  },
                  stringLength: {
                    min: 6,
                    max: 12,
                    message: "密码长度是6-12位"
                  },
                  callback: {
                    message:"密码错误"
                  }
                }
            }
        }

        

    }); 



}); 