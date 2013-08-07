class Developers < Cuba
  define do
    on "dashboard" do
      render("developer/dashboard", title: "Dashboard")
    end

    on "apply/:id" do |id|
      params = { date: Time.new,
        developer_id: Developer[session["Developer"]].id,
        post_id: id }

      application = Application.create(params)

      session[:success] = "You have successfully applied for a job!"
      res.redirect "/dashboard"
    end

    on "profile" do
      on post, param("developer") do |params|
        login = DeveloperLogin.new(params)

        on login.valid? do
          current_developer.update(params)
          session[:success] = "Your account was successfully updated!"
          res.redirect "/dashboard"
        end

        on default do
          session[:error] = "All fields are required and must be valid"
          render("developer/profile", title: "Edit profile")
        end
      end

      on default do
        render("developer/profile", title: "Edit profile")
      end
    end

    on "logout" do
      logout(Developer)
      session[:success] = "You have successfully logged out!"
      res.redirect "/"
    end

    on default do
      render("developer/dashboard", title: "Dashboard")
    end
  end
end
