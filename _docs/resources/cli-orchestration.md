# Orchestrating Claude and Gemini CLIs

This guide details how to set up and use a command-line pipeline to orchestrate the `claude` and `gemini` CLIs. This allows you to chain their capabilities, for example, by using Claude for complex, context-aware generation and then piping the result to Gemini for final formatting or transformation.

## Prerequisites

Before you begin, ensure you have the following installed and configured:

1.  **Node.js (v18+):** Required for both CLIs.
2.  **AWS CLI:** Installed and configured with your Bedrock-enabled credentials (`aws configure`).
3.  **WSL (Windows Subsystem for Linux):** All commands should be run within a WSL environment.

## 1. Setup and Configuration

### Claude Code CLI

First, install and configure the Claude Code CLI to work with AWS Bedrock.

**1. Install the CLI:**
Open your WSL terminal and run the following command to install the package globally.

```bash
sudo npm install -g @anthropic-ai/claude-code
```

**2. Configure Environment Variables for Bedrock:**
To ensure `claude` always uses AWS Bedrock and to avoid throttling, add the following configuration to your shell's startup file (`~/.bashrc` or `~/.zshrc`).

```bash
echo -e "\n# Claude Code AWS Bedrock Configuration\nexport CLAUDE_CODE_USE_BEDROCK=1\nexport ANTHROPIC_MODEL='us.anthropic.claude-sonnet-4-20250514-v1:0'\nexport CLAUDE_CODE_MAX_OUTPUT_TOKENS=4096\nexport MAX_THINKING_TOKENS=1024" >> ~/.bashrc
```
After adding this, **restart your terminal** or run `source ~/.bashrc` to apply the changes.

**3. Initial Run:**
Run `claude` once to complete any initial setup prompts.

### Gemini CLI

Next, install and configure the Gemini CLI.

**1. Install the CLI:**
```bash
npm install -g @google/gemini-cli
```

**2. Initial Login:**
Run `gemini` once. It will prompt you to log in with Google or provide an API key. Complete the authentication process.

## 2. Core Concepts for Orchestration

### Stateless vs. Stateful Commands

By default, running a CLI tool with a prompt is **stateless**. The command executes with the given input and then exits, retaining no memory of the interaction.

To have a **stateful**, multi-turn conversation where the AI remembers previous turns, you must use specific flags to continue a session.

### Non-Interactive Flags

To use these tools in a pipeline, you must run them non-interactively, so they simply print their output and exit.

-   For `claude`, use the `--print` flag.
-   For `gemini`, use the `-p, --prompt` flag.

### Piping with `|`

The pipe (`|`) operator is a core shell feature that lets you send the standard output of one command to the standard input of another. This is the primary mechanism for making the two CLIs communicate.

## 3. Commands and Examples

### Example 1: Simple Stateless Pipe

This example asks Claude a question and immediately pipes the answer to Gemini to be rephrased. Both commands are stateless.

```bash
claude "Explain what a Docker container is in one paragraph" --print | gemini -p "Rephrase this explanation for a non-technical audience:"
```
*   `claude ... --print` runs non-interactively, printing its answer to the output stream.
*   `|` redirects that output.
*   `gemini -p "..."` receives Claude's answer as standard input and uses it to complete its own prompt.

### Example 2: Building Context with Claude

The `claude` CLI can maintain context using the `-c, --continue` flag. The `gemini` CLI does not have this feature.

**Turn 1: Start a new conversation**
```bash
claude "What are the core components of the Kubernetes architecture?" --print
```

**Turn 2: Ask a follow-up question**
The `-c` flag tells `claude` to use the context from the previous command.
```bash
claude "Describe the role of the Kubelet in that architecture." -c --print
```

### Example 3: Stateful Pipeline (Claude to Gemini)

This is the most powerful workflow. We build up a stateful conversation with Claude and then pipe the final, context-aware result to the stateless Gemini CLI for a final transformation.

**Step 1: Build context with Claude over multiple turns.**
```bash
# Turn 1
claude "What are the benefits of Infrastructure as Code (IaC)?" --print

# Turn 2
claude "List the top 3 tools used for IaC and their primary use cases." -c --print
```

**Step 2: Use the context and pipe to Gemini for formatting.**
Here, we ask Claude to summarize the entire conversation, and then we use Gemini to format the summary into a markdown table.

```bash
claude "Summarize our entire conversation about IaC into a few bullet points" -c --print | gemini -p "Convert these bullet points into a professional markdown table with two columns: 'Benefit/Tool' and 'Description'."
```

This approach leverages the strengths of both tools: Claude's ability to maintain conversational context and Gemini's utility for quick, one-off formatting and language tasks. 