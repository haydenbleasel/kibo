'use client';

import { 
  AIMessage, 
  AIMessageAvatar, 
  AIMessageContent,
  AIMessageActions
} from '@repo/ai/message';
import { CalendarIcon, StarIcon } from 'lucide-react';
import { toast } from 'sonner';

const Example = () => (
  <div className="space-y-8">
    {/* Actions always visible at top */}
    <div>
      <h3 className="text-sm font-medium mb-2">Actions at top (always visible)</h3>
      <AIMessage from="assistant">
        <AIMessageContent>
          <AIMessageActions
            actions={[
              { type: 'copy', handler: () => { toast.success('Copied'); } },
              { type: 'like', handler: () => { toast.success('Liked'); } }
            ]}
            display="always"
            position="top"
            align="right"
          />
          This message has actions at the top that are always visible.
        </AIMessageContent>
        <AIMessageAvatar name="AI" src="https://github.com/openai.png" />
      </AIMessage>
    </div>

    {/* Actions on hover at bottom */}
    <div>
      <h3 className="text-sm font-medium mb-2">Actions at bottom (hover to show)</h3>
      <AIMessage from="user">
        <AIMessageContent>
          This is a user message. Hover to see actions at the bottom.
          <AIMessageActions
            actions={[
              { type: 'copy', handler: () => { toast.success('Copied'); } },
              { type: 'delete', handler: () => { toast.success('Deleted'); } }
            ]}
            display="hover"
            position="bottom"
            align="right"
          />
        </AIMessageContent>
        <AIMessageAvatar name="User" src="https://github.com/haydenbleasel.png" />
      </AIMessage>
    </div>

    {/* Actions with timestamp on left, actions on right */}
    <div>
      <h3 className="text-sm font-medium mb-2">Timestamp + Actions</h3>
      <AIMessage from="assistant">
        <AIMessageContent>
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
              {new Date().toLocaleTimeString()}
            </span>
            <AIMessageActions
              actions={[
                { type: 'copy', handler: () => { toast.success('Copied'); } },
                { 
                  type: 'custom',
                  icon: <CalendarIcon />,
                  label: 'Schedule reminder',
                  handler: () => { toast.success('Reminder scheduled'); }
                }
              ]}
              display="hover"
              position="bottom"
              align="right"
            />
          </div>
          This message shows how you can combine timestamps on the left with actions on the right for a complete message footer.
        </AIMessageContent>
        <AIMessageAvatar name="AI" src="https://github.com/openai.png" />
      </AIMessage>
    </div>

    {/* Multiple action sets */}
    <div>
      <h3 className="text-sm font-medium mb-2">Multiple action areas</h3>
      <AIMessage from="assistant">
        <AIMessageContent>
          <AIMessageActions
            actions={[
              { 
                type: 'custom',
                icon: <StarIcon />,
                label: 'Quick star',
                handler: () => { toast.success('Starred'); }
              }
            ]}
            display="always"
            position="top"
            align="right"
          />
          This message demonstrates having both top and bottom action areas for different purposes.
          <AIMessageActions
            actions={[
              { type: 'copy', handler: () => { toast.success('Copied'); } },
              { type: 'like', handler: () => { toast.success('Liked'); } },
              { type: 'dislike', handler: () => { toast.success('Disliked'); } },
              { type: 'retry', handler: () => { toast.success('Retrying'); } }
            ]}
            display="hover"
            position="bottom"
            align="right"
          />
        </AIMessageContent>
        <AIMessageAvatar name="AI" src="https://github.com/openai.png" />
      </AIMessage>
    </div>
  </div>
);

export default Example;