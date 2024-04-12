from flask import render_template, request, redirect, url_for
from . import app, db
from .models import User
from flask_login import login_user, login_required, logout_user

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = User.query.filter_by(username=username).first()
        if user and user.password == password:
            login_user(user)
            return redirect(url_for('index'))
        return '<h1>Invalid username or password</h1>'
    return render_template('login.html')

def init_routes(app):
    @app.route('/')
    @login_required
    def index():
        return render_template('index.html', user=current_user)
