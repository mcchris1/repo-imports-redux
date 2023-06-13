## What is Vim?

Vim is a text editor that runs in the terminal.

We will also be learning about & using Visual Studio Code, an Integrated Developer Environment, or IDE, that primarily functions as a text editor but includes many other features. It is important that we have familiarity with both, and it's up to you to decide which you prefer!


## Advantages and Disadvantages of Vim

Why?
  - Runs completely in the terminal
  - Uses a fraction of computer resources compared to all major IDEs
  - Free & open-source with a ton of active development, including plugins
  - You will run into Vim eventually (see: https://stackoverflow.com/questions/11828270/how-do-i-exit-the-vim-editor)
  - It is already installed on everything but Windows
  - Uses conventions shared by many other programs (even Twitter and Gmail!)
  - *Wildly, insanely efficient and customizable*

Why not?
  - Cut & paste in the terminal is wonky
  - Some people just prefer IDEs
  - *Very high learning curve that includes developing muscle memory*


## Install Vim
Vim, or its predecessor, `vi`, will already be installed on your computer. However, we want to do this install step for two reasons:
1) Have the most recent version
2) Have an easy way to keep it (and its dependencies) updated

We'll install Vim using our *package manager*, which for MacOS will be Homebrew and for Linux is the Advanced Package Tool (APT):
`brew install vim` or `sudo apt install vim`.


## Opening and Closing Vim

To open Vim, run `vim`.

To close Vim, type `:q` and hit enter. Tell all your software engineering friends that you learned how to quit Vim today.

Practice opening and closing Vim two more times! We want to develop *muscle memory*.


## Opening and closing a file in Vim

First, create a blank file in Bash with the `touch` command: `touch hello.txt`.

Next, open the file in Vim: `vim hello.txt`. What is different?

Next, exit Vim as before: `:q`. Rejoice!

Practice opening and closing this file two more times.


## Editing a File

In order to edit a file we need to switch *modes* in Vim. There are four basic modes to be aware of:
- `NORMAL` mode for navigating the file
- `COMMAND` mode for running commands (`:q` to quit is an example of a command)
- `INSERT` mode for editing the file
- `VISUAL` mode for selecting text

Here's what we're going to do:
- Open the file with `vim hello.txt`
- Switch from `NORMAL` mode to `INSERT` mode with `i`
- Edit the file buffer (type `Hello, world!`)
- Switch from `INSERT` mode back to `NORMAL` mode with the Escape key
- Save our changes from the buffer to the file (`:w`)
- Exit Vim (`:q`)


## Moving around in a file

The most obvious way to navigate in Vim is to use the arrow keys in `INSERT` mode. This is also the worst way to do it! I encourage you *not* to use the arrow keys.

Instead, while in `NORMAL` mode:
- Use `j` and `k` to move up and down a line
- Use `h` and `l` to move left and right
- Use `w` and `b` to go forwards and backwards one word at a time.
- Use `yy` and `p` to copy and paste line
- Use `dd` and `p` to cut and paste a line

Pressing `i` takes you to `INSERT` mode, but there are other ways:
- `A` to insert at the very end of the current line
- `I` to insert at the very beginning
- `o` inserts a new line *below* the cursor
- `O` inserts a new line *above*

Finally, for deleting:
- `x` to remove the current letter
- `dw` to delete a word, `cw` to 'change' a word
- `D` to delete to the end of the line
